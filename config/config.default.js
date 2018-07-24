'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532412146450_1382';

  // add your config here
  config.middleware = [
    'demo',
  ];

  config.demo = {
    demoOption: 'demo middleware config',
  }

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  return config;
};
