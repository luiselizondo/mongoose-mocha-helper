/**
 * @file
 * hooks to run before and after tests
 * it does not need to define a module.exports since
 * mocha will run the hooks just by requiring the file
 */

'use strict';

var mongoose = require('mongoose');
var mongodb;

module.exports = function (mongodbURI) {
  mongodb = mongodbURI;
};

function clearDatabase(callback) {
  for (var collectionIndex in mongoose.connection.collections) {
    mongoose.connection.collections[collectionIndex].remove(function () {
    });
  }

  return callback(false);
}

before(function () {
  if (mongoose.connection.readyState === 1) {
    mongoose.disconnect();
  }

  return mongoose.connect(mongodb);
});

beforeEach(function (done) {
  clearDatabase(function () {
    done();
  });
});

after(function (done) {
  mongoose.disconnect();
  return done();
});
