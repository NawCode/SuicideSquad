module.exports = (heroesDB) => async (req, res) => {
  if (Number.isNaN(parseInt(req.params.id, 10))) {
    return res.status(400).send('Le paramètre "id" doit être un nombre');
  }

  const hero = heroesDB.find((h) => h.id === req.params.id);

  if (!hero) {
    return res.status(404).send('Heros not found :(');
  }

  res.send(hero);
};
