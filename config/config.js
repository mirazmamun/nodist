var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'nodist'
    },
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000,
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
    port: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000,
    db: function () {
        var connection_string = 'mongodb://localhost/nodist';
        if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD){
            connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
        }
        return connection_string;
    }()
  }
};

module.exports = config[env];
