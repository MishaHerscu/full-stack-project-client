'use strict';

const getFormFields = require('../../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onCreatePost = (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.create(data)
  .done(ui.createPostSuccess)
  .fail(ui.failure);
};

const refreshPosts = () => {
  api.show()
  .done(ui.showPostsSuccess)
  .fail(ui.failure);
};

const addHandlers = () => {
  $('#create-post').on('submit', onCreatePost);
};

module.exports = {
  addHandlers,
  onCreatePost,
  refreshPosts
};
