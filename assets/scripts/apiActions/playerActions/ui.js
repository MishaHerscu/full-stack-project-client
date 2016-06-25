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

const showPlayersSuccess = (data) => {
  console.log(data);
};

module.exports = {
  success,
  failure,
  showPlayersSuccess
};
