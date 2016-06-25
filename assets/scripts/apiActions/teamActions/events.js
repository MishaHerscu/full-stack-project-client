'use strict';

const api = require('./api');
const ui = require('./ui');

const onShowTeams = () => {
  $('#page-title').text('Standings');

  $('.standings').show();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();

  api.show()
  .done(ui.onShowTeamsSuccess)
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
  $('#team-button').on('click', onShowTeamPage);
  $('#standings-button').on('click', onShowTeams);
};

module.exports = {
  addHandlers,
  onShowTeams,
  onShowTeamPage
};
