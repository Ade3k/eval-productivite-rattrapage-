/**
 * Importation des modules nécessaires.
 * @module express
 * @module path
 * @module url
 * @module cors
 */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

/**
 * Récupération du nom de fichier et du répertoire actuel.
 * @type {string}
 */
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Configuration du serveur.
 * @type {number}
 */
const port = 8070;
/**
 * Adresse IP du serveur.
 * @type {string}
 */
const host = '127.0.0.1';

/**
 * Création de l'application Express.
 * @type {Object}
 */
const app = express();

/**
 * Middleware pour traiter les requêtes de type `x-www-form-urlencoded`.
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Middleware pour activer le partage de ressources entre origines (`CORS`).
 */
app.use(cors());

/**
 * Middleware pour servir les fichiers statiques dans le dossier "public".
 */
app.use(express.static(path.join(dirname, 'public')));

/**
 * Middleware pour servir le favicon.
 */
app.use(
  '/favicon.ico',
  express.static(path.join(dirname, 'public', 'images', 'favicon.png'))
);

/**
 * Route principale.
 * Envoie le fichier `index.html` comme réponse.
 * @name get/
 * @function
 * @param {Object} _req - Objet représentant la requête HTTP.
 * @param {Object} res - Objet représentant la réponse HTTP.
 * @param {Function} next - Fonction de rappel pour passer à la prochaine étape de la chaîne middleware.
 */
app.get('/', (_req, res, next) => {
  return res.sendFile('index.html', { root: path.join(dirname) }, (err) => {
    if (err) {
      return next(err);
    }
  });
});

/**
 * Route pour obtenir les données d'un point de fraîcheur spécifique.
 * Récupère les données depuis une API Open Data de Paris.
 * @name get/freshpoint/:id
 * @function
 * @param {Object} req - Objet représentant la requête HTTP.
 * @param {Object} res - Objet représentant la réponse HTTP.
 * @param {Function} next - Fonction de rappel pour passer à la prochaine étape de la chaîne middleware.
 */
app.get('/freshpoint/:id', async (req, res, next) => {
  const freshPointIdParam = req.params.id;
  try {
    const response = await fetch(
      `https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/ilots-de-fraicheur-equipements-activites/records?limit=100`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );
    if (response) {
      const { results } = await response.json();
      return res.json({ data: results[freshPointIdParam] });
    }
  } catch (error) {
    return next(error);
  }
});

/**
 * Route pour envoyer un commentaire.
 * Envoie le message reçu dans la requête comme réponse.
 * @name post/comment
 * @function
 * @param {Object} req - Objet représentant la requête HTTP.
 * @param {Object} res - Objet représentant la réponse HTTP.
 * @param {Function} next - Fonction de rappel pour gérer les erreurs.
 */
app.post('/comment', (req, res, next) => {
  if (!req.body) {
    const err = new Error('No request body'); // Créer une nouvelle erreur
    return next(err); // Passer l'erreur au middleware d'erreur
  }

  const comment = req.body.message;
  return res.send(comment);
});

/**
 * Middleware global pour gérer les erreurs.
 * @name get
 * @function
 * @param {Error} err - Objet d'erreur.
 * @param {Object} req - Objet représentant la requête HTTP.
 * @param {Object} res - Objet représentant la réponse HTTP.
 * @param {Function} next - Fonction de rappel pour passer à la prochaine étape de la chaîne middlewar
 */
app.get((err, req, res, next) => {
  console.error(err);
});

/**
 * Démarrage du serveur sur le port défini et l'adresse hôte.
 */
app.listen(port, host, () => {
  console.info(`Server started @ http://${host}:${port}.`);
});