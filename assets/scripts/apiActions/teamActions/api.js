'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/teams/',
    method: "GET"
  });
};

const index = (teamId) => {
  return $.ajax({
    url: app.host + '/teams/' + teamId,
    method: "GET"
  });
};

const create = function(data){
  return $.ajax({
    url: app.host + '/teams',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const update = function(id, data){
  return $.ajax({
    url: app.host + '/teams/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const destroy = function(teamId){
  return $.ajax({
    url: app.host + '/teams/' + teamId,
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
