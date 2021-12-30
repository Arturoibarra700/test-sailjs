var supertest = require('supertest');
var assert = require('assert');

var createdSegment;
require('../bootstrap.test');

var manufacturers = require('../fixtures/manufacturer.json');

describe('Manufacture Controller', function() {
  
  it('get /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer')
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

  it('get /manufacturer/asd', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/asd')
      .send()
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

  it('put /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/manufacturer/1')
      .send(manufacturers[0])
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

  it('post /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/manufacturer')
      .send(manufacturers)
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

  it('put /manufacturer/asd', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/manufacturer/asd')
      .send(manufacturers[0])
      .expect(400)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('get /manufacturer/1', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/manufacturer/1')
      .send()
      .expect(200)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });

  it('delete /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer/1')
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

  it('delete /manufacturer/asd', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer/asd')
      .send()
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

  it('deleteAll /manufacturer', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/manufacturer')
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

  it('get /manufacturer/id', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let param  = JSON.stringify(  {
                  "name": "Car Bumper Safety Guard"
                });
      agent
        .get('/manufacturer/1')
        .send()
        // .expect(404)
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