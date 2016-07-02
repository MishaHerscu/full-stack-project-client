'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const helpers = require('../../helpers.js');
const app = require('../../app.js');
const api = require('./api.js');
const ui = require('./ui.js');
const authApi = require('../authActions/api.js');
const authUi = require('../authActions/ui.js');

const onCreatePlayer = (event) => {
  event.preventDefault();
  $('#createPlayerModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createPlayerSuccess)
  .fail(ui.failure);
};

const onShowPlayers = (event) => {
  event.preventDefault();
  $('#page-title').text('Players');

  helpers.hideAll();
  $('.players').show();

  api.show()
  .done(ui.showPlayersSuccess)
  .fail(ui.failure);
};

const onShowProfilePage = (event) => {
  event.preventDefault();
  $('#page-title').text('Profile');

  helpers.hideAll();
  $('.profile').show();

  if(app.player !== null && app.player !== undefined){
    api.show()
    .done(ui.showPlayersSuccess)
    .fail(ui.failure);
  }else{
    ui.noProfile();
  }
};

const onEditProfile = (event) => {
  event.preventDefault();
  authUi.setPlayerVals();

  $('#editProfileModal').modal('hide');
  let data = getFormFields(event.target);
  api.update(data)
  .done(ui.editProfileSuccess)
  .fail(ui.failure);
};

const onDeleteAccount = (event) => {
  event.preventDefault();
  $('#deleteAccountModal').modal('hide');

  api.destroy(app.player.id)
  .done(
    authApi.deleteAccount()
    .fail(authUi.failure)
  )
  .then(ui.deleteAccountSuccess)
  .fail(ui.failure);
};

const onSetupEditProfile = (event) => {
  event.preventDefault();
  $('#edit-profile').html('');

  let playerEditListingTemplate = require('../../templates/editPlayer.handlebars');
  $('#edit-profile').html(playerEditListingTemplate({ teams: app.teams }));
  $('#create-player-user-id').val(app.user.id);
  helpers.onSetAdminRights();
  authUi.setPlayerVals();
};

const addHandlers = () => {
  $('#create-player').on('submit', onCreatePlayer);
  $('#players-button').on('click', onShowPlayers);
  $('#profile-button').on('click', onShowProfilePage);
  $('#edit-profile').on('submit', onEditProfile);
  $('#delete-account').on('click', onDeleteAccount);
  $('#edit-profile-modal-button').on('click', onSetupEditProfile);
};

module.exports = {
  addHandlers,
  onShowPlayers,
  onShowProfilePage,
  onCreatePlayer,
  onEditProfile,
  onDeleteAccount,
  onSetupEditProfile,
};
