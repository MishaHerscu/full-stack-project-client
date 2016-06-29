'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/posts/',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: '',
  });
};

const index = (postId) => {
  return $.ajax({
    url: app.host + '/posts/' + postId,
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: '',
  });
};

const create = function(data){
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const update = function(id, data){
  return $.ajax({
    url: app.host + '/posts/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

const destroy = function(postId){
  return $.ajax({
    url: app.host + '/posts/' + postId,
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
