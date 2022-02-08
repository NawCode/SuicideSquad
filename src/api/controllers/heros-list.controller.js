const filterByField = (heroesDB, filterValues, fieldResolver) => {
  if (!Array.isArray(filterValues)) {
    filterValues = [filterValues];
  }

  return heroesDB.filter((hero) => {
    try {
      return filterValues.filter((value) =>
        new RegExp(`^${value}`, 'i').test(fieldResolver(hero))
      ).length;
    } catch (err) {
      return false;
    }
  });
};

module.exports = (heroesDB) => async (req, res) => {
  let filteredHeroes = heroesDB;

  if (req.query.name) {
    filteredHeroes = filterByField(
      heroesDB,
      req.query.name,
      (hero) => hero.name
    );
  }

  if (req.query.alignment) {
    filteredHeroes = filterByField(
      heroesDB,
      req.query.alignment,
      (hero) => hero.biography.alignment
    );
  }

  if (req.query.publisher) {
    filteredHeroes = filterByField(
      heroesDB,
      req.query.publisher,
      (hero) => hero.biography.publisher
    );
  }

  if (req.query.id) {
    filteredHeroes = filterByField(heroesDB, req.query.id, (hero) => hero.id);
  }

  let page = Number(req.query.page || 1);
  page -= 1;

  const countPerPage = Number(req.query.countPerPage || 20);

  if (isNaN(parseInt(page)) || isNaN(parseInt(countPerPage))) {
    return res.status(400).send('Paramètres invalides');
  }

  res.send({
    total: filteredHeroes.length,
    results: filteredHeroes.slice(
      page * countPerPage,
      page * countPerPage + countPerPage
    ),
  });
};
