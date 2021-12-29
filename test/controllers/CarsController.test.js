var supertest = require('supertest');
var assert = require('assert');

var createdSegment;
require('../bootstrap.test');

var accessories = require('../fixtures/Accessories.json');
var cars = require('../fixtures/cars.json');

var apiBase ="http://localhost:8000";

describe('Accessories Controller', function() {
  
  it('get /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get('/car')
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

  it('post /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    
    
      agent
      .post('/car')
      .send(cars[0])
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

  it('put /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/car/1')
      .send(cars[0])
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

  it('delete /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/car/1')
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

  it('search /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let param  = JSON.stringify(  {
      "name":{
        "contains":"RX"
      }
    });

    agent
      .get('/car/search?where='+param)
      .send()
      .expect(404)
      .end(function(err, result) {
        if (err) {
          done(err);
        } else {
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it('deleteAll /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/car')
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

      it('delete /car', function(done) {
        var agent = supertest.agent(sails.hooks.http.app);
        agent
          .delete('/car/1')
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

      it('put /car', function(done) {
        var agent = supertest.agent(sails.hooks.http.app);
        agent
          .put('/car/1')
          .send(cars[0])
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

      it('post /car', function(done) {
        var agent = supertest.agent(sails.hooks.http.app);
        agent
          .post('/car')
          .send(cars)
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

});