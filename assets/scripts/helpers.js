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
    } else {
      $('.admin-only').prop('disabled', true);
      $('#admin-status-title').hide();
    }
  }
};

const addHandlers = () => {
  $(document).click(onSetAdminRights);
};

module.exports = {
  hideAll,
  addHandlers,
  onSetAdminRights,
};
