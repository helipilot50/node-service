import { expect } from 'chai';
import request from 'supertest';
import app from '../src/app';

async function getRequest(url) {
  return request(app)
    .get(url)
    .set('Accept', 'application/json');
}

describe('#GET', () => {
  describe('#getOwner (with pets)', () => {
    describe('using a valid id', () => {
      let result;
      before(async () => {
        result = await getRequest('/owners/1/pets');
      });
      it('returns a 200 http status code', () => {
        expect(result.status).to.equal(200);
      });
      it('returns the owner with pets', () => {
        expect(result.body.data).to.be.an('object');
        expect(result.body.data.pets).to.be.not.empty;
      });
    });

    describe('using an invalid id', () => {
      let result;
      before(async () => {
        result = await getRequest('/owners/abc/pets');
      });
      it('returns a 404 http status code', () => {
        expect(result.status).to.equal(404);
      });
    });
  });

  describe('#getPet', () => {
    describe('using a valid id', () => {
      let result;
      before(async () => {
        result = await getRequest('/pets/1');
      });
      it('returns a 200 http status code', () => {
        expect(result.status).to.equal(200);
      });
      it('returns the pet', () => {
        expect(result.body.data).to.be.an('object');
        expect(result.body.data).to.be.not.empty;
      });
    });

    describe('using an invalid id', () => {
      let result;
      before(async () => {
        result = await getRequest('/pets/abc');
      });
      it('returns a 404 http status code', () => {
        expect(result.status).to.equal(404);
      });
    });
  });
});
