'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowTeams = (event) => {
  event.preventDefault();
  api.show()
  .done(ui.onShowTeamsSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#show-teams').on('submit', onShowTeams);
};

module.exports = {
  addHandlers,
};
