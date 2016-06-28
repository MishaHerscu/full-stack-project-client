'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/attendances/',
    method: "GET"
  });
};

const index = (attendanceId) => {
  return $.ajax({
    url: app.host + '/attendances/' + attendanceId,
    method: "GET"
  });
};

const create = function(data){
  return $.ajax({
    url: app.host + '/attendances',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const update = function(id, data){
  return $.ajax({
    url: app.host + '/attendances/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const destroy = function(attendanceId){
  return $.ajax({
    url: app.host + '/attendances/' + attendanceId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: '',
  });
};

module.exports = {
  show,
  index,
  create,
  update,
  destroy
};
