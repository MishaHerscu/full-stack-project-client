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

const signUpSuccess = function(){
  $('#sign-in-email').val($('#sign-up-email').val());
  $('#sign-in-pw').val($('#sign-up-pw').val());
  $('#sign-in').submit();
  $('#signUpModal').modal('hide');
};

const signInSuccess = (data) => {
  app.user = data.user;
  // console.log(app.user);
  $('.signed-in').show();
  $('.signed-out').hide();
  $('#signInModal').modal('hide');
};

const signOutSuccess = () => {
  console.log('User signed out successfully');
  app.user = null;
  $('.signed-in').hide();
  $('.signed-out').show();
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess
};
