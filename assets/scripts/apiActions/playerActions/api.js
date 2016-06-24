'use strict';

const app = require('../../app.js');

const show = () => {
  return $.ajax({
    url: app.host + '/players/',
    method: "GET"
  });
};

module.exports = {
  show
};
