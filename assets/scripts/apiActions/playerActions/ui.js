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

const noProfile = () => {
  $('#createPlayerModal').modal('show');
};

const showPlayersSuccess = (data) => {
  $('.players-data').html('');
  let playerListingTemplate = require('../../templates/player-listing.handlebars');
  $('.players-data').append(playerListingTemplate(data));
};

const showProfilePageSuccess = (data) => {
  console.log(data);
};

const createPlayerSuccess = (data) => {
  console.log(data);
};

module.exports = {
  success,
  failure,
  noProfile,
  showPlayersSuccess,
  showProfilePageSuccess,
  createPlayerSuccess
};
