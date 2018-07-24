'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/greeting', controller.demo.greet);
  router.get('/posts', controller.demo.posts);
  router.get('/posts/:id', controller.demo.getPost);
};
