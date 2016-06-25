'use strict';

const app = require('../../app.js');
const playerApi = require('../playerActions/api.js');

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
    }
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
