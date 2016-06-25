'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/players/',
    method: "GET"
  });
};

const index = (playerId) => {
  return $.ajax({
    url: app.host + '/players/' + playerId,
    method: "GET"
  });
};

const create = function(data){
  return $.ajax({
    url: app.host + '/players',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const update = function(id, data){
  return $.ajax({
    url: app.host + '/players/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const destroy = function(playerId){
  return $.ajax({
    url: app.host + '/players/' + playerId,
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
