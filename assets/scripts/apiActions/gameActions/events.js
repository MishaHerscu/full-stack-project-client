'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const app = require('../../app.js');
const helpers = require('../../helpers.js');
const api = require('./api.js');
const ui = require('./ui.js');
const goalApi = require('../goalActions/api.js');
const goalUi = require('../goalActions/ui.js');
const assistApi = require('../assistActions/api.js');
const assistUi = require('../assistActions/ui.js');

const onCreateGame = (event) => {
  event.preventDefault();
  $('#createGameModal').modal('hide');
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createGameSuccess)
  .fail(ui.failure);
};

const onShowGames = (event) => {
  event.preventDefault();
  $('#page-title').text('Games');

  helpers.hideAll();
  $('.games').show();

  api.show()
  .done(ui.showGamesSuccess)
  .fail(ui.failure);
};

const onDeleteGame = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");
  console.log(data);
  api.destroy(data)
  .done(ui.deleteGameSuccess)
  .fail(ui.failure);
};

const isValidPoint = (pointObject) => {

  let gameId = pointObject.gameId.value;
  let scorerId = pointObject.scorerId.value;
  let assister = pointObject.assisterId.value;

  if(gameId > 0 && scorerId > 0 && assister > 0){
    return true;
  }
};

const onBulkCreatePoints = (event) => {
  event.preventDefault();
  let rawData = $(event.target).serializeArray();
  let rawDataLength = rawData.length;
  let pointCount = rawDataLength / 3;

  // split the fields into the points
  let new_points = [];
  for(let i = 0; i < pointCount; i++){
    let multiplier = 3 * i;
    new_points.push(
      {
        gameId: rawData[multiplier + 0],
        scorerId: rawData[multiplier + 1],
        assisterId: rawData[multiplier + 2]
      }
    );
  }

  // filter to completed points only (game, scorer, assister)
  let finalPoints = [];
  for(let j = 0; j < pointCount; j++){
    if(isValidPoint(new_points[j])){
      finalPoints.push(new_points[j]);
    }
  }
  let finalPointCount = finalPoints.length;

  // create the actual points
  for(let k = 0; k < finalPointCount; k++){

    let goalData = {
      goal: {
        player_id: finalPoints[k].scorerId.value,
        game_id: finalPoints[k].gameId.value
      }
    };

    let assistData = {
      assist: {
        player_id: finalPoints[k].assisterId.value,
        game_id: finalPoints[k].gameId.value
      }
    };

    goalApi.create(goalData)
    .fail(goalUi.failure);

    assistApi.create(assistData)
    .fail(assistUi.failure);

    helpers.hideAll();
    $('#points-button').click();
    $('.bulk-points-add-game').val('');
    $('.bulk-points-add-scorer').val('');
    $('.bulk-points-add-assister').val('');
  }
};

const onBulkCreatePointsForm = (event) => {
  event.preventDefault();
  let data = $(event.target).data("id");

  $('.bulk-points-add-game').val(data);

  $('#page-title').text('Create Points');
  helpers.hideAll();
  $('.bulk-points-add').show();
};

const onSetupGameCreation = (event) => {
  event.preventDefault();
  $('#create-game').html('');

  let createGameListingTemplate = require('../../templates/createGame.handlebars');
  $('#create-game').html(createGameListingTemplate({ teams: app.teams }));
  helpers.onSetAdminRights();
};

const addHandlers = () => {
  $('#create-game').on('submit', onCreateGame);
  $('#bulk-create-points').on('submit', onBulkCreatePoints);
  $('#games-button').on('click', onShowGames);
  $('#create-game-modal-button').on('click', onSetupGameCreation);
  $(document).on('click', '.game-delete-button', onDeleteGame);
  $(document).on('click', '.bulk-create-points-button', onBulkCreatePointsForm);
};

module.exports = {
  addHandlers,
  onShowGames,
  onCreateGame,
  onDeleteGame,
  onBulkCreatePoints,
  onBulkCreatePointsForm,
  onSetupGameCreation
};
