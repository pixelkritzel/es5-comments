var ready = require('./helpers/ready');
var config = require('./config');
var Comments = require('./comments/index');

ready(function() {
  new Comments(config);
})