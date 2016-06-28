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

const showGamesSuccess = (data) => {
  app.games = data.games;

  $('.attendance-data').text('');

  let attendancesCount = app.player.attendances.length;
  let gamesCount = app.games.length;
  for (let i = 0; i < attendancesCount; i++){
    for (let j = 0; j < gamesCount; j++){
      if(app.player.attendances[i].game_id === app.games[j].id){
        app.player.attendances[i].game = app.games[j];
      }
    }
  }

  let attendanceData = { attendances: app.player.attendances };

  let attendanceListingTemplate = require('../../templates/attendance-listing.handlebars');
  $('.attendance-data').append(attendanceListingTemplate(attendanceData));

  $('.games-data').html('');
  let gameListingTemplate = require('../../templates/game-listing.handlebars');
  $('.games-data').append(gameListingTemplate(data));
};

const createGameSuccess = (data) => {
  showGamesSuccess(data);
  $('#games-button').click();
};

const deleteGameSuccess = () => {
  $('#games-button').click();
};

module.exports = {
  success,
  failure,
  showGamesSuccess,
  createGameSuccess,
  deleteGameSuccess,
};
