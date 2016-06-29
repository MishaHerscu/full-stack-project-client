'use strict';

const app = require('../../app.js');
const events = require('./events.js');
const attendanceEvents = require('../attendanceActions/events.js');

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

  $('.attendance-data').html('');
  let attendanceListingTemplate = require('../../templates/attendance.handlebars');
  $('.attendance-data').html(attendanceListingTemplate(attendanceData));
  $('.attendance-delete-button').on('click', attendanceEvents.onDeleteAttendance);

  $('.games-data').html('');
  let gameListingTemplate = require('../../templates/game.handlebars');
  $('.games-data').html(gameListingTemplate(data));
  $('.game-delete-button').on('click', events.onDeleteGame);
  $('.bulk-create-points-button').on('click', events.onBulkCreatePointsForm);
};

const createGameSuccess = () => {
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
