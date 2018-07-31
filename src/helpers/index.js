export default (req) => {
  const { id } = req.params;
  if (id && Number.isInteger(+id)) {
    return +id;
  }
  return false;
};
