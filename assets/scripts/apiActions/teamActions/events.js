'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const app = require('../../app.js');
const api = require('./api');
const ui = require('./ui');

const onCreateTeam = (event) => {
  event.preventDefault();
  $('#createTeamModal').modal('hide');
  let data = getFormFields(event.target);


  api.create(data)
  .done(ui.createTeamSuccess)
  .fail(ui.failure);
};

const onPageLoad = () => {
  $('#standings-button').click();
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

  if(app.team !== null && app.team !== undefined){
    $('#current-team-rank').text(app.team.rank);
    $('#current-team-name').text(app.team.name);
    $('#current-team-wins').text(app.team.winCount);
    $('#current-team-losses').text(app.team.lossCount);
    $('#current-team-games').text(app.team.gameCount);
    $('#current-team-win-pct').text(app.team.winPct);
  }else{
    $('#profile-button').click();
  }
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
  onCreateTeam,
  onPageLoad
};
