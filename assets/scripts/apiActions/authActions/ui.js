'use strict';

const app = require('../../app.js');
const playerApi = require('../playerActions/api.js');
const playerUi = require('../playerActions/ui.js');
const teamApi = require('../teamActions/api.js');
const teamUi = require('../teamActions/ui.js');

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

const signUpSuccess = function(){
  $('#sign-in-email').val($('#sign-up-email').val());
  $('#sign-in-pw').val($('#sign-up-pw').val());
  $('#sign-in').submit();
  $('#signUpModal').modal('hide');
};

const setPlayerVals = function(){
  $('#profile-last-name').text(app.player.surname);
  $('#profile-first-name').text(app.player.given_name);
  $('#profile-email').text(app.player.email);
  $('#profile-phone-number').text(app.player.phone_number);
  $('#profile-captain').text(app.player.captain);
  $('#profile-team-id').text(app.player.team_id);

  $('#update-player-user-id').val(app.user.id);
  $('#current-team-id').val(app.player.team_id);

  $('#update-player-surname').val(app.player.surname);
  $('#update-player-given-name').val(app.player.given_name);
  $('#update-player-email').val(app.player.email);
  $('#update-player-phone-number').val(app.player.phone_number);
  // $('#update-player-captain').val(app.player.captain);
  $('#update-player-team-id').val(app.player.team_id);
  $('#update-player-user-id').val(app.user.id);
};

const setPlayer = function(data){
  let players = data.players;
  let max = players.length;
  for(let i = 0; i < max; i++){
    if(players[i].user.id === app.user.id){
      app.player = players[i];
      setPlayerVals();
    }
  }
  if(app.player !== null && app.player !== undefined){
    teamApi.show()
    .done(teamUi.showTeamsSuccess)
    .then(
      playerApi.show()
      .done(playerUi.showPlayersSuccess)
      .fail(playerUi.failure)
    )
    .fail(teamUi.failure);
  }else{
    playerUi.noProfile();
  }
};

const signInSuccess = (data) => {
  $('#signInModal').modal('hide');
  $('.signed-in').show();
  $('.signed-out').hide();
  app.user = data.user;

  playerApi.show()
  .done(setPlayer)
  .fail(playerApi.failure);
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  app.player = null;
  app.team = null;
  app.teams = null;
  app.teamMembers = null;
  app.playerStats = null;
  $('.signed-in').hide();
  $('.signed-out').show();
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  setPlayer,
  setPlayerVals
};
