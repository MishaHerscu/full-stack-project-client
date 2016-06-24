'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: "GET"
  });
};

const index = (gameId) => {
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: "GET"
  });
};

module.exports = {
  show,
  index
};
