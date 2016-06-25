'use strict';

const api = require('./api');
const ui = require('./ui');

const onCreateTeam = (event) => {
  event.preventDefault();
  $('#createTeamModal').modal('hide');

  api.create(event.data)
  .done(ui.createTeamSuccess)
  .fail(ui.failure);
};

const onShowTeams = (event) => {
  event.preventDefault();
  $('#page-title').text('Standings');

  $('.standings').show();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();

  api.show()
  .done(ui.showTeamsSuccess)
  .fail(ui.failure);
};

const onShowTeamPage = (event) => {
  event.preventDefault();
  $('#page-title').text('Team');

  $('.standings').hide();
  $('.games').hide();
  $('.players').hide();
  $('.team').show();
  $('.profile').hide();
};

const addHandlers = () => {
  $('#create-team').on('submit', onCreateTeam);
  $('#team-button').on('click', onShowTeamPage);
  $('#standings-button').on('click', onShowTeams);
};

module.exports = {
  addHandlers,
  onShowTeams,
  onShowTeamPage,
  onCreateTeam
};
