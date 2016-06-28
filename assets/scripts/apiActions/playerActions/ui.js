'use strict';

const helpers = require('../../helpers.js');
const app = require('../../app.js');

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

const noProfile = () => {
  $('#create-player-user-id').val(app.user.id);
  $('#createPlayerModal').modal('show');
};

const setTeamMembers = (data) => {
  $('.team-members-data').html('');
  let allPlayers = data.players;
  let max = data.players.length;
  app.teamMembers = { players: [] };
  for(let i = 0; i < max; i++){
    if(allPlayers[i].team_id === app.player.team_id){
      app.teamMembers.players.push(allPlayers[i]);
    }
  }
  let playerListingTemplate = require('../../templates/player.handlebars');
  $('.team-members-data').html(playerListingTemplate(app.teamMembers));
};

const setPlayerStats = (data) => {
  app.playerStats = data.players;

  let playerCount = app.playerStats.length;
  for(let i = 0; i < playerCount; i++){
    app.playerStats[i].goalCount = app.playerStats[i].goals.length;
    app.playerStats[i].assistCount = app.playerStats[i].assists.length;
    app.playerStats[i].pointCount = app.playerStats[i].goalCount + app.playerStats[i].assistCount;

    // get game count
    let teamCount = app.teams.length;
    for(let j = 0; j < teamCount; j++){
      if(app.teams[j].id === app.team.id){
        app.playerStats[i].gameCount = app.teams[j].gameCount;
      }
    }

    if(app.playerStats[i].gameCount > 0){
      app.playerStats[i].GPG = Math.round(1000 * app.playerStats[i].goalCount / app.playerStats[i].gameCount) / 1000;
      app.playerStats[i].APG = Math.round(1000 * app.playerStats[i].assistCount / app.playerStats[i].gameCount) / 1000;
      app.playerStats[i].PPG = Math.round(1000 * app.playerStats[i].pointCount / app.playerStats[i].gameCount) / 1000;
    }else{
      app.playerStats[i].GPG = 0.000;
      app.playerStats[i].APG = 0.000;
      app.playerStats[i].PPG = 0.000;
    }
  }

  // sort and assign rank
  app.playerStats.sort(
    function(a, b) {
      return a.PPG - b.PPG;
    }
  ).reverse();

  for(let k = 0; k < app.playerStats.length; k++){
    app.playerStats[k].rank = k + 1;
  }
};

const showPlayersSuccess = (data) => {
  $('.players-profile-data').html('');
  $('.players-stats-data').html('');

  // show player stats
  setPlayerStats(data);
  let statsData = { statPlayers: app.playerStats };
  let statPlayerListingTemplate = require('../../templates/statPlayer.handlebars');
  $('.players-stats-data').html(statPlayerListingTemplate(statsData));

  // show player contact info
  let profileData = { players: app.playerStats };
  let playerListingTemplate = require('../../templates/player.handlebars');
  $('.players-profile-data').html(playerListingTemplate(profileData));

  if(app.player !== null && app.player !== undefined){
    setTeamMembers(data);
    for(let m = 0, max = app.playerStats.length; m < max; m++){
      if(app.playerStats[m].id === app.player.id){
        $('#profile-rank').text(app.playerStats[m].rank);
        $('#profile-games').text(app.playerStats[m].gameCount);
        $('#profile-goals').text(app.playerStats[m].goalCount);
        $('#profile-assists').text(app.playerStats[m].assistCount);
        $('#profile-points').text(app.playerStats[m].pointCount);
        $('#profile-gpg').text(app.playerStats[m].GPG);
        $('#profile-apg').text(app.playerStats[m].APG);
        $('#profile-ppg').text(app.playerStats[m].PPG);
      }
    }
  } else {
    noProfile();
  }
};

const createPlayerSuccess = () => {
  $('#update-player-user-id').val(app.user.id);
  $('#sign-in').submit();
};

const editProfileSuccess = () => {
  $('#update-player-surname').val(app.player.surname);
  $('#update-player-given-name').val(app.player.given_name);
  $('#update-player-email').val(app.player.email);
  $('#update-player-phone-number').val(app.player.phone_number);
  // $('#update-player-captain').val(app.player.captain);
  $('#update-player-team-id').val(app.player.team_id);
  $('#update-player-user-id').val(app.user.id);
  $('#sign-in').submit();
};

const deleteAccountSuccess = () => {
  console.log('User signed out successfully');
  console.log('User account deleted');
  app.user = null;
  app.player = null;
  app.team = null;
  app.teamMembers = null;

  $('#page-title').text('Standings');

  helpers.hideAll();
  $('.standings').show();

  $('.signed-in').hide();
  $('.signed-out').show();

};

module.exports = {
  success,
  failure,
  noProfile,
  setTeamMembers,
  showPlayersSuccess,
  createPlayerSuccess,
  editProfileSuccess,
  deleteAccountSuccess,
  setPlayerStats,
};
