import pets from '../mocks/pets';
import getId from '../helpers';

const prepareData = (id, data) => {
  const pet = {};
  const {
    name,
    colour,
    age,
    breed,
  } = data;

  if (name) {
    pet.name = name;
  }
  if (colour) {
    pet.colour = colour;
  }
  if (age) {
    pet.age = age;
  }
  if (breed) {
    pet.breed = breed;
  }
  if (Object.keys(pet).length > 0) {
    pet.id = id;
  }
  return pet;
};

const updatePet = (req, res) => {
  const id = getId(req);
  if (id) {
    const pet = prepareData(id, req.body);
    if (pet) {
      try {
        for (let i = 0; i < pets.length; i++) {
          if (pets[i].id === pet.id) {
            const data = Object.assign({}, pets[i], pet);
            return res.status(200).json({ data });
          }
        }
      } catch (err) {
        return res.status(500).json({
          message: 'Oops! something went wrong.',
        });
      }
    }
    return res.status(400).json({
      message: 'Nothing to update.',
    });
  }
  return res.status(404).json({
    message: 'Invalid ID.',
  });
};

module.exports = {
  updatePet,
};
