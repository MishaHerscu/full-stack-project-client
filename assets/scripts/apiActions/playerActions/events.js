'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowPlayers = (event) => {
  event.preventDefault();
  api.show()
  .done(ui.showPlayersSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#show-players').on('submit', onShowPlayers);
};

module.exports = {
  addHandlers,
  onShowPlayers
};
