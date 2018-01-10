'use strict';

'use strict'

const MongoClient     = require("mongodb").MongoClient;
const async           = require('async');

const buildDbGetter = module.exports = function buildDbGetter(config) {
  config = config ? config : process.env.DB;
  const memoizedConnect = async.memoize((callback) => MongoClient.connect(config, callback));

  return function getDb(callback) {
    const done = function gotDb(err, db) {
      if (callback.length === 1) {
        if (err) {
          console.error('error connecting to the db, exiting');
          return process.exit(1);
        }

        return callback(db);
      }

      return callback(err, db);
    };

    memoizedConnect(function (err, db) {
      if (err) {
        return done(err);
      }
      done(null, db);
    });
  };
};

getDb.hapi = (getDb) => require('./hapi')(getDb);
