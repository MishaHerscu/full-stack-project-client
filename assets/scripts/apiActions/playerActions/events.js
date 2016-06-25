'use strict';

const app = require('../../app.js');
const api = require('./api');
const ui = require('./ui');

const onShowPlayers = (event) => {
  event.preventDefault();
  api.show()
  .done(ui.showPlayersSuccess)
  .fail(ui.failure);
};

const onShowProfilePage = (event) => {
  event.preventDefault();
  console.log('MY app.user is: ', app.user);
  $('.standings').hide();
  $('#page-title').text('Profile');
  api.index(app.user.id)
  .done(ui.showProfilePageSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#players-button').on('click', onShowPlayers);
  $('#profile-button').on('click', onShowProfilePage);
};

module.exports = {
  addHandlers,
  onShowPlayers,
  onShowProfilePage
};
