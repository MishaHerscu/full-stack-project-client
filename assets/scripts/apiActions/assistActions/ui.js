'use strict';

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
  let assistListingTemplate = require('../../templates/assist-listing.handlebars');
  $('.assists-data').append(assistListingTemplate(data));
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
