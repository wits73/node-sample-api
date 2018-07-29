const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('GET /users', ()=> {
  describe('Sucess', ()=> {
    it('Response by array of users', (done)=> {
      request(app)
          .get('/users')
          .end((err, res) => {
            res.body.should.be.instanceOf(Array);
            done();
          });
    });
    
    it('Response by user limit', (done) => {
      request(app)
          .get('/users?limit=2')
          .end((err, res) => {
            res.body.should.have.lengthOf(2)
            done();
          });
    });
  });

  
  describe('Fail', ()=> {
    it('limit should be number so response 400', (done) => {
      request(app)
          .get('/users?limit=two')
          .expect(400)
          .end(done);
    })
  })
});