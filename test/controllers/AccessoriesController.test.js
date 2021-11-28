var supertest = require('supertest');
var assert = require('assert');

var createdSegment;
require('../bootstrap.test');

describe('Accessories Controller', function() {
  it('get /fetch', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/accessories')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });
  it('post /fetch', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/accessories')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

});