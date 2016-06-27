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

const setPlayer = function(data){
  let players = data.players;
  let max = players.length;
  for(let i = 0; i < max; i++){
    if(players[i].user.id === app.user.id){
      app.player = players[i];
      $('#profile-last-name').text(app.player.surname);
      $('#profile-first-name').text(app.player.given_name);
      $('#profile-email').text(app.player.email);
      $('#profile-phone-number').text(app.player.phone_number);
      $('#profile-captain').text(app.player.captain);
      $('#profile-team-id').text(app.player.team_id);

      $('#update-player-user-id').val(app.user.id);
    }
  }
  teamApi.show()
  .done(teamUi.showTeamsSuccess)
  .then(
    playerApi.show()
    .done(playerUi.showPlayersSuccess)
    .fail(playerUi.failure)
  )
  .fail(teamUi.failure);
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
  app.teamMembers = null;
  $('.signed-in').hide();
  $('.signed-out').show();
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  setPlayer
};
