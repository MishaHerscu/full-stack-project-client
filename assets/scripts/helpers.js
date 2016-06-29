'use strict';

const hideAll = () => {
  $('.standings').hide();
  $('.games').hide();
  $('.players').hide();
  $('.team').hide();
  $('.profile').hide();
  $('.points').hide();
  $('.bulk-points-add').hide();
};

module.exports = {
  hideAll,
};
