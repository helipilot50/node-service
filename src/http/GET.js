import owners from '../mocks/owners';
import pets from '../mocks/pets';
import getId from '../helpers';

const getOwner = (req, res) => {
  const id = getId(req);
  if (id) {
    let data = {};
    const owner = owners.find(x => x.id === id);
    if (owner) {
      data = owner;
      data.pets = pets.filter(x => x.owner_id === id);
    }
    return res.status(200).json({ data });
  }
  return res.status(404).json({
    message: 'Invalid ID.',
  });
};

const getPet = (req, res) => {
  const id = getId(req);
  if (id) {
    let data = {};
    const pet = pets.find(x => x.id === id);
    if (pet) {
      data = pet;
    }
    return res.status(200).json({ data });
  }
  return res.status(404).json({
    message: 'Invalid ID.',
  });
};

module.exports = {
  getOwner,
  getPet,
};
