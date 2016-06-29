'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const helpers = require('../../helpers.js');
const api = require('./api');
const ui = require('./ui');
const assistApi = require('../assistActions/api');

const onCreatePoint = (event) => {
  event.preventDefault();
  $('#createPointModal').modal('hide');
  let data = getFormFields(event.target);
  console.log(data);
  let goalData = {
    goal: {
     player_id: data.newPointDetails.scorer_id,
     game_id: data.newPointDetails.game_id
   }
 };
 let assistData = {
   assist: {
    player_id: data.newPointDetails.assister_id,
    game_id: data.newPointDetails.game_id
  }
};

  api.create(goalData)
  .done(
    assistApi.create(assistData)
    .done(ui.createPointSuccess)
    .fail(ui.failure)
  );
};

const onShowPoints = (event) => {
  event.preventDefault();
  $('#page-title').text('Points');

  helpers.hideAll();
  $('.points').show();

  api.show()
  .done(ui.showGoalsSuccess)
  .fail(ui.failure);
};

const onDeletePoint = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");
  api.destroy(data)
  .done(ui.deletePointSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#create-point').on('submit', onCreatePoint);
  $('#points-button').on('click', onShowPoints);
  $(document).on('click', '.goal-delete-button', onDeletePoint);
};

module.exports = {
  addHandlers,
  onShowPoints,
  onCreatePoint,
  onDeletePoint
};
