'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const helpers = require('../../helpers.js');
const api = require('./api');
const ui = require('./ui');

const onCreateGame = (event) => {
  event.preventDefault();
  $('#createGameModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

const onShowGames = (event) => {
  event.preventDefault();
  $('#page-title').text('Games');

  helpers.hideAll();
  $('.games').show();

  api.show()
  .done(ui.showGamesSuccess)
  .fail(ui.failure);
};

const onDeleteGame = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");
  api.destroy(data)
  .done(ui.deleteGameSuccess)
  .fail(ui.failure);
};

const onBulkCreatePoints = (event) => {
  event.preventDefault();
  let data = $(event.target);
  console.log(data);
};

const onBulkCreatePointsForm = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");

  $('.bulk-points-add-game').val(data);

  $('#page-title').text('Create Points');
  helpers.hideAll();
  $('.bulk-points-add').show();
};


const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame);
  $('#bulk-create-points').on('submit', onBulkCreatePoints);
  $('#games-button').on('click', onShowGames);
  $(document).on('click', '.game-delete-button', onDeleteGame);
  $(document).on('click', '.bulk-create-points-button', onBulkCreatePointsForm);
};

module.exports = {
  addHandlers,
  onShowGames,
  onCreateGame,
  onDeleteGame,
  onBulkCreatePoints,
  onBulkCreatePointsForm
};
