var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN, {debug: false});
var _ = require('lodash');

var cfg = {
  base: require('./base'),
  test: require('./test'),
  prod: require('./prod')
};

var env = process.argv[2] || 'test';

var options = _.merge({}, cfg.base, cfg[env]);

configurator(options);