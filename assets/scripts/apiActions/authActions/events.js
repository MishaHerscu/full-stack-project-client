'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api.js');
const ui = require('./ui.js');

const onSignUp = (event) => {
  event.preventDefault();
  $('#sign-up-admin').val('false');

  let data = getFormFields(event.target);

  api.signUp(data)
  .done(ui.success)
  .then(ui.signUpSuccess)
  .fail(ui.failure);
};

const onSignIn = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .fail(ui.failure);
};

const onSignOut = (event) => {
  event.preventDefault();
  $('#standings-button').click();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};

const onChangePassword = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);

  $('#sign-out').on('click', onSignOut);
};
//
module.exports = {
  addHandlers,
};
