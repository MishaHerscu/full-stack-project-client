'use strict';

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
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
    team.winPct = ((team.winCount / team.gameCount) * 100) + '%';
  }else{
    team.winPct = 'N/A';
  }

  return team;
};

const onShowTeamsSuccess = (data) => {
  $('#teams-standing').html('');

  for(let i = 0, max = data.teams.length; i < max; i++){
    console.log(data.teams[i]);
    data.teams[i] = updateTeamStats(data.teams[i]);
    console.log(data.teams[i]);
  }

  let teamListingTemplate = require('../../templates/team-listing.handlebars');
  $('.teams-standing').append(teamListingTemplate(data));
};

module.exports = {
  success,
  failure,
  onShowTeamsSuccess
};
