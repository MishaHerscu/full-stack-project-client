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
      $('.admin-only').addClass('active');
      $('.admin-only').removeClass('disabled');
    } else {
      $('.admin-only').addClass('disabled');
      $('.admin-only').removeClass('active');
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
