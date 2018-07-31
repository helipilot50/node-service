import owners from '../mocks/owners';
import pets from '../mocks/pets';

const listOwners = (req, res) => {
  res.status(200).json({
    data: owners,
  });
};

const listPets = (req, res) => {
  res.status(200).json({
    data: pets,
  });
};

module.exports = {
  listOwners,
  listPets,
};
