const path = require('path');
const fs = require('fs');
const cors = require('cors');
const express = require('express');
const { connect } = require('./db');

const app = express();
const port = process.env.PORT || 3001;

// Chargement des variables d'environnement
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

// Récupération des données de la DB (heroes-data.json)
const heroesDB = JSON.parse(fs.readFileSync('./src/api/heroes-db.json'));

// Gestion des CORS
app.use(cors({}));

// On définit le dossier build comme statique, ce qui permet de publier
// l'application REACT
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// Connection à la BDD
const db = connect({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Page d'accueil de l'API (on renvoie simplement le contenu d'index.html)
app.use('/api', express.static(path.join(__dirname, 'index.html')));

// Liste tous les héros disponibles
app.get(
  '/api/heroes',
  require('./controllers/heros-list.controller')(heroesDB)
);

// Renvoi un héros depuis son id
app.get(
  '/api/heroes/:id',
  require('./controllers/heros-by-id.controller')(heroesDB)
);

// Endpoint qui renvoie la liste de TOUS les utilisateurs
app.get('/api/users', async (req, res) => {
  try {
    const [users] = await db.query('SELECT * FROM users');
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
