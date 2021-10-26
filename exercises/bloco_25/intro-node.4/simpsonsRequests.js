const { getSimpsonsFile, setSimpsonsFile } = require('./simpsonsUtils');

const getSimpsons = async (_req, res) => {
  const simpsons = await getSimpsonsFile();

  res.status(200).json(simpsons);
};

const getSimpsonsById = async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsonsFile();
  const simpson = simpsons.find((simpson) => simpson.id === id);

  if (!simpson) return res.status(404).json({ message: 'simpson not found' });

  res.status(200).json(simpson);
};

const addCharacter = async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsonsFile();
  const simpson = simpsons.find((simpson) => simpson.id === id);

  if (simpson) return res.status(409).json({ message: 'id already exists' });

  simpsons.push({id, name});

  setSimpsonsFile(simpsons);

  res.status(204).end();
};

module.exports = { getSimpsons, getSimpsonsById, addCharacter };