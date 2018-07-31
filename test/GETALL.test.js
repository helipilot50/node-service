import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

async function getRequest(url) {
  return request(app)
    .get(url)
    .set('Accept', 'application/json');
}

describe('#GETALL', () => {
  describe('#listOwners', () => {
    let result;
    before(async () => {
      result = await getRequest('/owners');
    });

    it('returns a 200 http status code', () => {
      expect(result.status).to.equal(200);
    });

    it('returns a list of owners', () => {
      expect(result.body).to.be.an('object');
      expect(result.body.data).to.be.an('array');
      expect(result.body).to.be.not.empty;
    });
  });

  describe('#listPets', () => {
    let result;
    before(async () => {
      result = await getRequest('/pets');
    });

    it('returns a 200 http status code', () => {
      expect(result.status).to.equal(200);
    });

    it('returns a list of pets', () => {
      expect(result.body).to.be.an('object');
      expect(result.body.data).to.be.an('array');
      expect(result.body).to.be.not.empty;
    });
  });
});
