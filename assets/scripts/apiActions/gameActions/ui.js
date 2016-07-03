'use strict';

const app = require('../../app.js');
const helpers = require('../../helpers.js');
const teamApi = require('../teamActions/api.js');
const teamUi = require('../teamActions/ui.js');

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

  $('.games-data').html('');
  let gameListingTemplate = require('../../templates/game.handlebars');
  $('.games-data').html(gameListingTemplate(data));
  helpers.onSetAdminRights();

  if(app.player){

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
    helpers.onSetAdminRights();
  }
};

const createGameSuccess = () => {
  teamApi.show()
  .done(teamUi.showTeamsSuccess)
  .then($('#games-button').click())
  .fail(teamUi.failure);
};

const deleteGameSuccess = () => {
  teamApi.show()
  .done(teamUi.showTeamsSuccess)
  .then($('#games-button').click())
  .fail(teamUi.failure);
};

module.exports = {
  success,
  failure,
  showGamesSuccess,
  createGameSuccess,
  deleteGameSuccess,
};
