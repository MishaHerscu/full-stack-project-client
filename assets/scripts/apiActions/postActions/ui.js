'use strict';

const api = require('./api');

const success = (data) => {
  if (data) {
    // console.log(data);
  } else {
    // console.log('Success');
  }
};

const failure = (error) => {
  console.error(error);
};

const showPostsSuccess = (data) => {
  let sortedPosts = data.posts.sort(
    function(a, b) {
      return a.updated_at - b.updated_at;
    }
  ).reverse();

  $('.team-post-data').html('');
  let postListingTemplate = require('../../templates/post.handlebars');
  $('.team-post-data').html(postListingTemplate(sortedPosts));
};

const refreshPostTable = () => {
  api.show()
  .done(showPostsSuccess)
  .fail(failure);
};

const createPostSuccess = () => {
  refreshPostTable();
};

module.exports = {
  success,
  failure,
  createPostSuccess,
  refreshPostTable,
  showPostsSuccess
};
