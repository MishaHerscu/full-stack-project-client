'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowGames = (event) => {
  event.preventDefault();
  api.show()
  .done(ui.showGamesSuccess)
  .fail(ui.failure);
};

const onShowGamesPage = (event) => {
  event.preventDefault();
};

const addHandlers = () => {
  $('#show-games').on('submit', onShowGames);
  $('#games-button').on('click', onShowGamesPage);
};

module.exports = {
  addHandlers,
  onShowGames,
  onShowGamesPage
};
