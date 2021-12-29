var supertest = require('supertest');
var assert = require('assert');
var sinon = require('sinon');

var AccessoriesController = require('../../api/controllers/AccessoriesController');
require('../bootstrap.test');

var accessories = require('../fixtures/Accessories.json');

const getFailHead= {
  statusCode: 404,
  headers: {
    'content-type': 'application/json'
  }
};
const getFailBody ={};

describe('Accessories Controller', function() {

  
  before(async ()=> {  
    // accessoriesStub =  sinon.stub(AccessoriesController,"fetch").returns(accessories[0]);
  });
  
  it('get /accessories', function(done) {
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

  it('get /accessories fails', function(done) {
    
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

  it('post /accessories', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post('/accessories')
      .send(accessories)
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

  it('put /accessories', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put('/accessories/1')
      .send(accessories[0])
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

  it('delete /accessories', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories/1')
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

  it('deleteAll /accessories', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/accessories')
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

  it('search /accessories', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let param  = JSON.stringify(  {
                  "name": "Car Bumper Safety Guard"
                });

    agent
      .get('/accessories/search?sort=price ASC')
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

});