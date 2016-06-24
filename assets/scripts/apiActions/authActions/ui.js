'use strict';

const app = require('../../app.js');

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

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app.user);
  $('.signed-in').show();
  $('.signed-out').hide();
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
  signInSuccess,
  signOutSuccess
};
