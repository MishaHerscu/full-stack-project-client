'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowTeams = () => {
  api.show()
  .done(ui.onShowTeamsSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
};

module.exports = {
  addHandlers,
  onShowTeams
};
