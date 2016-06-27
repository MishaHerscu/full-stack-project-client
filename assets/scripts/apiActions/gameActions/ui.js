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

const showGamesSuccess = (data) => {
  $('.games-data').html('');
  let gameListingTemplate = require('../../templates/game-listing.handlebars');
  $('.games-data').append(gameListingTemplate(data));
};

const createGameSuccess = (data) => {
  console.log(data);
  showGamesSuccess(data);
};

module.exports = {
  success,
  failure,
  showGamesSuccess,
  createGameSuccess
};
