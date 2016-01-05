var inMemoryRepository = require('./../inMemoryRepository');
var app = require('../app')(inMemoryRepository);
var request = require('supertest')(app);
var assert = require('assert');

describe('BOOKS', function() {
  it('should return POSTed values', function(done) {
    var object = {
      isbn: '123456',
      count: '10'
    };

    request
      .post('/books')
      .set('Content-Type', 'application/json')
      .send(object)
      .expect('Content-Type', /json/)
      .expect(200, object, done);
  });

});