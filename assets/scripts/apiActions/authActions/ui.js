'use strict';

const app = require('../../app.js');
const helpers = require('../../helpers.js');
const playerApi = require('../playerActions/api.js');
const playerUi = require('../playerActions/ui.js');
const teamApi = require('../teamActions/api.js');
const teamUi = require('../teamActions/ui.js');
const gameApi = require('../gameActions/api.js');
const gameUi = require('../gameActions/ui.js');
const goalApi = require('../goalActions/api.js');
const goalUi = require('../goalActions/ui.js');
const assistApi = require('../assistActions/api.js');
const assistUi = require('../assistActions/ui.js');

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
  $('#profile-team').text(helpers.getTeamName(app.player, app.teams));

  $('#update-player-user-id').val(app.user.id);
  $('#current-team-id').val(app.player.team_id);
  $('#create-attendance-player-id').val(app.user.id);

  $('#create-post-player-id').val(app.player.id);
  $('#create-post-team-id').val(app.player.team_id);

  $('#update-player-surname').val(app.player.surname);
  $('#update-player-given-name').val(app.player.given_name);
  $('#update-player-email').val(app.player.email);
  $('#update-player-phone-number').val(app.player.phone_number);
  $('#update-player-team-id').val(app.player.team_id);
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
      .then(
        gameApi.show()
        .done(gameUi.showGamesSuccess)
        .then(
          goalApi.show()
          .done(goalUi.showOnlyGoalsSuccess)
          .then(
            assistApi.show()
            .done(assistUi.showAssistsSuccess)
            .fail(assistUi.failure)
          )
          .fail(goalUi.failure)
        )
        .fail(gameUi.failure)
      )
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
  $('#non-admin-status-title').hide();
  $('#admin-status-title').hide();
  $('.signed-out').hide();
  $('#create-player-email').val($('#sign-in-email').val());
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
  app.games = null;
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
  setPlayerVals,
};
