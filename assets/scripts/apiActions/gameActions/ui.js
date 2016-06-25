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
  console.log(data);
};

const createGameSuccess = (data) => {
  console.log(data);
};

module.exports = {
  success,
  failure,
  showGamesSuccess,
  createGameSuccess
};
