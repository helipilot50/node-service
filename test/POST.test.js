import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

async function getRequest(url, body) {
  return request(app)
    .post(url)
    .send(body)
    .set('Accept', 'application/json');
}

describe('#POST', () => {
  describe('#createPet', () => {
    let result;
    before(async () => {
      result = await getRequest('/pets', {
        name: 'New Pet',
        colour: 'Yellow',
        age: 20,
        breed: 'Dog',
      });
    });

    it('returns a 200 http status code', () => {
      expect(result.status).to.equal(200);
    });

    it('creates a pet by incrementing the id', () => {
      expect(result.body).to.be.an('object');
      expect(result.body.data).to.be.not.empty;
      expect(result.body.data.id).to.equal(4);
    });
  });
});
