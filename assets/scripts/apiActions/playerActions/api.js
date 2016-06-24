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

module.exports = {
  show,
  index
};
