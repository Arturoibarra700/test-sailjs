var supertest = require('supertest');
var assert = require('assert');

require('../bootstrap.test');

var accessories = require('../fixtures/Accessories.json');
var cars = require('../fixtures/cars.json');
var variant = require('../fixtures/Varient.json');
var segments = require('../fixtures/segment.json');
var manufacturers = require('../fixtures/manufacturer.json');

describe('Car Controller', function() {
  before(function(){
    var agent = supertest.agent(sails.hooks.http.app);
  //   agent.post('/manufacturer').send(manufacturers).end(function() {});
  //   agent.post('/segment').send(segments).end(function() {});
  //   agent.post('/accessories').send(accessories).end(function() {});
  //   variant.forEach(v => {
  //     agent.post('/variant').send(v).end(function() {});
  //   })
  })
  
  it('get success /car', function(done) {
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

  it('post fail /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
        agent
          .post('/car')
          .send(cars)
          .set('Content-Type','application/json')
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

  xit('post /car suucess', function(done) {

    var agent = supertest.agent(sails.hooks.http.app);

    // agent.post('/manufacturer').send(manufacturers).end(function() {
    //   agent.post('/segment').send(segments).end(function() {
    //     agent.post('/accessories').send(accessories).end(function() {
    //         variant.forEach(v => {
    //           agent.post('/variant').send(v).end(function() {});
    //         })
            agent
              .post('/car')
              .send({
                "name": "Tata Nexon",
                "segment": 1,
                "description": "This is a dummy text",
                "manufacturer": null,
                "variants": [],
                "accessories": []
            }).set("Content-Type", "application/json")
              .expect(200)
              .end(function(err, result) {
                  if (err) {
                    done(err);
                  } else {
                    // result.body.length.should.be.aboveOrEqual(0);
                    done();
                  }
              });  
    //     });
    //   });
    // });
      

  
  
  });

  xit('post  200 /car', function(done) {
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

  it('put 404 /car', function(done) {
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

  it('put 404 /car', function(done) {
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

  it('delete 404 /car', function(done) {
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

  it('delete  400 /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete('/car/asd')
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

  it('deleteAll success /car', function(done) {
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
  });

  it('search 404 /car', function(done) {
    var agent = supertest.agent(sails.hooks.http.app);
    let param  = JSON.stringify(  {
      "name":{
        "contains":"RX"
      }
    });

    agent
      .get('/car/search?limit=1&skip=1&sort&ASC&where='+param)
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