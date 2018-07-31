import pets from '../mocks/pets';

const prepareData = (data) => {
  const {
    name,
    colour,
    age,
    breed,
  } = data;

  if (!name || !colour || !age || !breed) {
    return false;
  }

  return {
    name,
    colour,
    age,
    breed,
  };
};

const createPet = (req, res) => {
  const pet = prepareData(req.body);
  if (pet) {
    try {
      // This will be replaced by DB insert
      let maxId = Math.max(...pets.map(p => p.id), 0);
      pet.owner_id = null;
      pet.id = ++maxId;
      return res.status(200).json({
        data: pet,
      });
    } catch (err) {
      return res.status(400).json({
        message: 'Oops! something went wrong.',
      });
    }
  }
  return res.status(400).json({
    message: 'All fields are mandatory.',
  });
};

module.exports = {
  createPet,
};
