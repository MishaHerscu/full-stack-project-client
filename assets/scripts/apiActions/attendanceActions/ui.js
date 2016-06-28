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

const createAttendanceSuccess = () => {
  $('#sign-in').submit();
  $('#profile-button').click();
};

const deleteAttendanceSuccess = () => {
  $('#sign-in').submit();
  $('#profile-button').click();
};

module.exports = {
  success,
  failure,
  createAttendanceSuccess,
  deleteAttendanceSuccess,
};
