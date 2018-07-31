import healthcheck from './http/healthcheck';
import { listOwners, listPets } from './http/GETALL';
import { getOwner, getPet } from './http/GET';
import { updatePet } from './http/PUT';
import { createPet } from './http/POST';

export default (app) => {
  app.get('/_healthcheck', healthcheck);
  app.get('/owners/:id/pets', getOwner);
  app.get('/owners', listOwners);
  app.get('/pets/:id', getPet);
  app.get('/pets', listPets);
  app.post('/pets', createPet);
  app.put('/pets/:id', updatePet);
  app.get('/', (req, res) => {
    const body = 'Hey! We are up and running :)';
    res.writeHead(200, {
      'Content-Length': Buffer.byteLength(body),
      'Content-Type': 'text/html',
    });
    res.write(body);
    res.end();
  });
};
