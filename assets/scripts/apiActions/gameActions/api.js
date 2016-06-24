'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/show/',
    method: "GET"
  });
};

module.exports = {
  show
};
