var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodist'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodist-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'nodist'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodist-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'nodist'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/nodist-production'
  }
};

module.exports = config[env];
