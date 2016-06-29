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

const showGoalsSuccess = (data) => {
  $('.goals-data').html('');
  let goalListingTemplate = require('../../templates/goal.handlebars');
  $('.goals-data').html(goalListingTemplate(data));
  $('#assists-button').click();
};

const showOnlyGoalsSuccess = (data) => {
  $('.goals-data').html('');
  let goalListingTemplate = require('../../templates/goal.handlebars');
  $('.goals-data').html(goalListingTemplate(data));
};

const createPointSuccess = (data) => {
  showGoalsSuccess(data);
  $('#points-button').click();
};

const deletePointSuccess = () => {
  $('#points-button').click();
};

module.exports = {
  success,
  failure,
  showGoalsSuccess,
  createPointSuccess,
  deletePointSuccess,
  showOnlyGoalsSuccess,
};
