'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowGames = (event) => {
  event.preventDefault();
  api.show()
  .done(ui.showGamesSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#show-games').on('submit', onShowGames);
};

module.exports = {
  addHandlers,
  onShowGames
};
