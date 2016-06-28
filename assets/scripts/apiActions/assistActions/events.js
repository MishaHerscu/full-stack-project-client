'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onCreateAssist = (event) => {
  event.preventDefault();
  $('#createAssistModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createAssistSuccess)
  .fail(ui.failure);
};

const onShowAssists = (event) => {
  event.preventDefault();
  $('#page-title').text('Assists');

  $('.standings').hide();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();
  $('.points').show();

  api.show()
  .done(ui.showAssistsSuccess)
  .fail(ui.failure);
};

const onDeleteAssist = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");
  api.destroy(data)
  .done(ui.deleteAssistSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#create-assist').on('submit', onCreateAssist);
  $('#assists-button').on('click', onShowAssists);
  $(document).on('click', '.assist-delete-button', onDeleteAssist);
};

module.exports = {
  addHandlers,
};
