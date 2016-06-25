'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowGames = (event) => {
  event.preventDefault();
  $('#page-title').text('Games');

  $('.standings').hide();
  $('.games').show();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();

  api.show()
  .done(ui.showGamesSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#games-button').on('click', onShowGames);
};

module.exports = {
  addHandlers,
  onShowGames,
};
