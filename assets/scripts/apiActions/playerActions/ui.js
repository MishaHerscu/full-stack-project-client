'use strict';

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
  let playerListingTemplate = require('../../templates/player-listing.handlebars');
  $('.team-members-data').append(playerListingTemplate(app.teamMembers));
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
      app.playerStats[i].GPG = 'N/A';
      app.playerStats[i].APG = 'N/A';
      app.playerStats[i].PPG = 'N/A';
    }
  }
  console.log(app.playerStats);
};

const showPlayersSuccess = (data) => {
  $('.players-profile-data').html('');
  let playerListingTemplate = require('../../templates/player-listing.handlebars');
  $('.players-profile-data').append(playerListingTemplate(data));
  setPlayerStats(data);

  if(app.player !== null && app.player !== undefined){
    setTeamMembers(data);
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
  $('#update-player-captain').val(app.player.captain);
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

  $('.standings').show();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();

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
