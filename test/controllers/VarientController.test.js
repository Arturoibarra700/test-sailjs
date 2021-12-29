var supertest = require('supertest');
var assert = require('assert');

require('../bootstrap.test');

var accessories = require('../fixtures/Accessories.json');
var variants = require('../fixtures/Varient.json');
const { agent } = require('supertest');

describe('Variant Controller', function() {
  
  it('get /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/variant')
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

  it('post /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/variant')
      .send(variants)
      .expect(400)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          // result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it('put /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/variant/1')
      .send(variants[0])
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

  it('delete /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant/1')
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

  it('deleteAll /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/variant')
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

  it('search /variant', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let param  = JSON.stringify(  {
      "name":{
        "contains":"RX"
      }
    });

    agent
      .get('/variant/search?where='+param)
      .send()
      .expect(404)
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