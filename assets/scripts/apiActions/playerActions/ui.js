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
  $('#createPlayerAccount').modal('show');
};

const showPlayersSuccess = (data) => {
  console.log(data);
};

const showProfilePageSuccess = (data) => {
  console.log(data);
};

module.exports = {
  success,
  failure,
  noProfile,
  showPlayersSuccess,
  showProfilePageSuccess
};
