'use strict';

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
};

const addHandlers = () => {
  $('#profile-button').on('click', onShowProfilePage);
};

module.exports = {
  addHandlers,
  onShowPlayers,
  onShowProfilePage
};
