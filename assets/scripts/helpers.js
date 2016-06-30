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
    } else {
      $('.admin-only').prop('disabled', true);
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
