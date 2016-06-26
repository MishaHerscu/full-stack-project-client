'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const app = require('../../app.js');
const api = require('./api');
const ui = require('./ui');

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

  $('.standings').hide();
  $('.games').hide();
  $('.players').show();
  $('.team').hide();
  $('.profile').hide();

  api.show()
  .done(ui.showPlayersSuccess)
  .fail(ui.failure);
};

const onShowProfilePage = (event) => {
  event.preventDefault();
  $('#page-title').text('Profile');

  $('.standings').hide();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').show();

  if(app.player !== null && app.player !== undefined){
    api.show()
    .done(ui.showPlayersSuccess)
    .fail(ui.failure);
  }else{
    ui.noProfile();
  }
};

const addHandlers = () => {
  $('#create-player').on('submit', onCreatePlayer);
  $('#players-button').on('click', onShowPlayers);
  $('#profile-button').on('click', onShowProfilePage);
};

module.exports = {
  addHandlers,
  onShowPlayers,
  onShowProfilePage,
  onCreatePlayer
};
