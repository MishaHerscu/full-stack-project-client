'use strict';

const app = require('./app.js');

const hideAll = () => {
  $('.standings').hide();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();
  $('.points').hide();
  $('.bulk-points-add').hide();
};

const onSetAdminRights = () => {
  if(app.player !== null && app.player !== undefined){
    if(app.player.user.admin === 'true'){
      $('.admin-only').prop('disabled', false);
      $('#admin-status-title').show();
      $('#non-admin-status-title').hide();
    } else {
      $('.admin-only').prop('disabled', true);
      $('#admin-status-title').hide();
      $('#non-admin-status-title').show();
    }
  }
};

const getTeamName = function(player, teams){
  app.team = teams.filter(function(team){
    if(player.team_id === team.id){
      return true;
    }
  })[0];
  let teamName = app.team.name;
  return teamName;
};

const getTeamRank = function(player, teams){
  app.team = teams.filter(function(team){
    if(player.team_id === team.id){
      return true;
    }
  })[0];
  let teamRank = app.team.rank;
  return teamRank;
};

const addHandlers = () => {
  $(document).click(onSetAdminRights);
};

module.exports = {
  hideAll,
  addHandlers,
  onSetAdminRights,
  getTeamName,
  getTeamRank
};
