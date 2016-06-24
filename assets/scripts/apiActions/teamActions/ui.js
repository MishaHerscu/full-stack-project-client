'use strict';

const success = (data) => {
  if (data) {
    console.log(data);
  } else {
    console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const onShowTeamsSuccess = (data) => {
  $('.teams-standing').html('');
  let teamListingTemplate = require('../../templates/team-listing.handlebars');
  $('.teams-standing').append(teamListingTemplate(data));
};

module.exports = {
  success,
  failure,
  onShowTeamsSuccess
};
