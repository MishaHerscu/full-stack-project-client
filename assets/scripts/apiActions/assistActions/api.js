'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/assists/',
    method: "GET"
  });
};

const index = (assistId) => {
  return $.ajax({
    url: app.host + '/assists/' + assistId,
    method: "GET"
  });
};

const create = function(data){
  return $.ajax({
    url: app.host + '/assists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const update = function(id, data){
  return $.ajax({
    url: app.host + '/assists/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const destroy = function(assistId){
  return $.ajax({
    url: app.host + '/assists/' + assistId,
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
