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
  $('.team-members-data').html('');

  let allPlayers = data.players;
  let max = data.players.length;
  app.teamMembers = { players: [] };
  for(let i = 0; i < max; i++){
    if(allPlayers[i].team_id === app.player.team_id){
      app.teamMembers.players.push(allPlayers[i]);
    }
  }

  let playerListingTemplate = require('../../templates/player-listing.handlebars');
  $('.players-data').append(playerListingTemplate(data));
  $('.team-members-data').append(playerListingTemplate(app.teamMembers));
};

const createPlayerSuccess = (data) => {
  console.log(data);
};

const editProfileSuccess = (data) => {
  console.log(data);
};

const deleteAccountSuccess = () => {
  $('#sign-out').click();
};

module.exports = {
  success,
  failure,
  noProfile,
  showPlayersSuccess,
  createPlayerSuccess,
  editProfileSuccess,
  deleteAccountSuccess,
};
