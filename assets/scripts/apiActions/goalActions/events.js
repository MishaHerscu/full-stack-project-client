'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onCreatePoint = (event) => {
  event.preventDefault();
  $('#createPointModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createPointSuccess)
  .fail(ui.failure);
};

const onShowPoints = (event) => {
  event.preventDefault();
  $('#page-title').text('Points');

  $('.standings').hide();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();
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
