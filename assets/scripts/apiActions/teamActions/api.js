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
    url: app.host + '/players/' + teamId,
    method: "GET"
  });
};

module.exports = {
  show,
  index
};
