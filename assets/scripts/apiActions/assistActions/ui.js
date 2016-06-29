'use strict';

const events = require('./events.js');

const success = (data) => {
  if (data) {
    // console.log(data);
  } else {
    // console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const showAssistsSuccess = (data) => {
  $('.assists-data').html('');
  let assistListingTemplate = require('../../templates/assist.handlebars');
  $('.assists-data').html(assistListingTemplate(data));
  $('.assist-delete-button').on('click', events.onDeleteAssist);
};

const createAssistSuccess = (data) => {
  showAssistsSuccess(data);
  $('#assists-button').click();
};

const deleteAssistSuccess = () => {
  $('#assists-button').click();
};

module.exports = {
  success,
  failure,
  showAssistsSuccess,
  createAssistSuccess,
  deleteAssistSuccess,
};
