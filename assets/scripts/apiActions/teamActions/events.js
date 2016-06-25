'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowTeams = () => {
  api.show()
  .done(ui.onShowTeamsSuccess)
  .fail(ui.failure);
};

const onShowTeamPage = (event) => {
  event.preventDefault();
};

const addHandlers = () => {
  $('#team-button').on('click', onShowTeamPage);
};

module.exports = {
  addHandlers,
  onShowTeams,
  onShowTeamPage
};
