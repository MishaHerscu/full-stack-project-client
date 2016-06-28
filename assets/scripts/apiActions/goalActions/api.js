'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/goals/',
    method: "GET"
  });
};

const index = (goalId) => {
  return $.ajax({
    url: app.host + '/goals/' + goalId,
    method: "GET"
  });
};

const create = function(data){
  return $.ajax({
    url: app.host + '/goals',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const update = function(id, data){
  return $.ajax({
    url: app.host + '/goals/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const destroy = function(goalId){
  return $.ajax({
    url: app.host + '/goals/' + goalId,
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
