'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const app = require('../../app.js');

const onCreateGame = (event) => {
  event.preventDefault();
  $('#current-team-id').text(app.player.team_id);
  $('#createGameModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

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
  $('#create-game').on('submit', onCreateGame);
  $('#games-button').on('click', onShowGames);
};

module.exports = {
  addHandlers,
  onShowGames,
  onCreateGame
};
