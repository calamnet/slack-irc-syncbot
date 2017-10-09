'use strict';

var App = require('./lib/app');

var config = {
  server: 'irc.utonet.org',
  serverPort: 6667,
  nick: 'shamelessbot2',
  username: 'shamelessbot2',
  token: 'xoxb-252659720225-ixUdUiKh54wqPlhOkTiCnTQj',
  incomeUrl: 'https://hooks.slack.com/services/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',
  outgoingToken: 'qfjNFyRQHTKbqtbmGE5WRDsQ',
  serverPort: 80
};

config.channels = {
  '#shameless': '#internal'
};

config.users = {
  'ircLogin (not nick)': 'slackUser'
};

App( config ).start();
