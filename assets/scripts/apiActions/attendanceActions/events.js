'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api.js');
const ui = require('./ui.js');

const onCreateAttendance = (event) => {
  event.preventDefault();
  $('#createAttendanceModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createAttendanceSuccess)
  .fail(ui.failure);
};

const onDeleteAttendance = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");

  api.destroy(data)
  .done(ui.deleteAttendanceSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#create-attendance').on('submit', onCreateAttendance);
  $(document).on('click', '.attendance-delete-button', onDeleteAttendance);
};

module.exports = {
  addHandlers,
  onCreateAttendance,
  onDeleteAttendance,
};
