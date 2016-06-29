'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

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
};

module.exports = {
  addHandlers,
  onCreateAttendance,
  onDeleteAttendance,
};
