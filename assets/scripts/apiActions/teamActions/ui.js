'use strict';

const app = require('../../app.js');
const helpers = require('../../helpers.js');

const success = (data) => {
  if (data) {
    // console.log(data);
  } else {
    // console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const updateTeamStats = (team) => {

  team.gameCount = team.games.length;

  team.winCount = 0;
  team.lossCount = 0;
  team.tieCount = 0;

  if(team.gameCount > 0){
    for(let j = 0, max = team.gameCount; j < max; j++){
      if(team.games[j].won === 'true'){
        team.winCount += 1;
      }else if(team.games[j].won === 'false'){
        team.lossCount += 1;
      }else{
        team.tieCount += 1;
      }
    }
    team.winPct = (Math.round((team.winCount / team.gameCount) * 100)) + '%';
  }else{
    team.winPct = '0%';
  }

  return team;
};

const comparator = (a, b) => {
    return parseInt(a.winPct, 10) - parseInt(b.winPct, 10);
};

const rankTeams = (teams) => {
  let teamCount = teams.length;
  let sortedTeams = teams.sort(comparator).reverse();
  let ranks = [];

  for(let i = 0; i < teamCount; i++){
    ranks.push(teams[i].id);
  }

  for(let j = 0; j < teamCount; j++){
    teams[j].rank = ranks.indexOf(teams[j].id) + 1;
  }

  return sortedTeams;
};

const showTeamsSuccess = (data) => {
  $('.teams-standings').html('');
  let teamsCount = data.teams.length;

  // update team stats
  for(let i = 0; i < teamsCount; i++){
    data.teams[i] = updateTeamStats(data.teams[i]);
  }

  // persist data for other uses
  app.teams = data.teams;

  // rank teams
  data.teams = rankTeams(data.teams);

  // set current team
  if(app.player !== null && app.player !== undefined){
    for(let i = 0, max = data.teams.length; i < max; i++){
      if(data.teams[i].id === app.player.team_id){
        app.team = data.teams[i];
        $('#current-team-id').val(app.team.id);
      }
    }
  }
  let teamListingTemplate = require('../../templates/team.handlebars');
  $('.teams-standings').html(teamListingTemplate(data));
  helpers.onSetAdminRights();
};

const createTeamSuccess = (data) => {
  console.log(data);
};

module.exports = {
  success,
  failure,
  updateTeamStats,
  comparator,
  rankTeams,
  showTeamsSuccess,
  createTeamSuccess,
};
