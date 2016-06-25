'use strict';

const app = require('../../app.js');

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
  $('#create-player-user-id').val(app.user.id);
  $('#createPlayerModal').modal('show');
};

const showPlayersSuccess = (data) => {
  $('.players-data').html('');
  let playerListingTemplate = require('../../templates/player-listing.handlebars');
  $('.players-data').append(playerListingTemplate(data));
};

const showProfilePageSuccess = (data) => {
  let player = data.player;

  $('#page-title').text('Profile');

  $('.standings').hide();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').show();

  $('#profile-last-name').text(player.surname);
  $('#profile-first-name').text(player.given_name);
  $('#profile-email').text(player.email);
  $('#profile-phone-number').text(player.phone_number);
  $('#profile-captain').text(player.captain);
  $('#profile-team-id').text(player.team_id);
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
