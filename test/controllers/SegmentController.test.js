var supertest = require('supertest');
var assert = require('assert');

var createdSegment;
require('../bootstrap.test');

var segments = require('../fixtures/segment.json');

describe('Segment Controller', function() {
  it('get /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/segment')
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

  it('deleteAll /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          // result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it('post /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/segment')
      .send(segments)
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

  it('put /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/segment/1')
      .send(segments[0])
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

  it('delete /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment/1')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          // result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it('deleteAll /segment', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/segment')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          // result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });


});