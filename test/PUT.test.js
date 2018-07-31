import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

async function getRequest(url, body) {
  return request(app)
    .put(url)
    .send(body)
    .set('Accept', 'application/json');
}

describe('#PUT', () => {
  describe('#updatePet', () => {
    let result;
    before(async () => {
      result = await getRequest('/pets/1', { colour: 'Red' });
    });

    it('returns a 200 http status code', () => {
      expect(result.status).to.equal(200);
    });

    it('updates colour of the pet', () => {
      expect(result.body).to.be.an('object');
      expect(result.body.data).to.be.not.empty;
      expect(result.body.data.colour).to.equal('Red');
    });
  });
});
