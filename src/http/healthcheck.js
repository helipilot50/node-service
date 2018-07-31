export default (req, res, next) => {
  res.status(200).send('Alive!');
  next();
};
