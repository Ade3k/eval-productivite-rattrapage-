# Installation des paquets npm

```
npm install
```

# Démarrage de l'application

```
npm start
```

Application disponible en local sur le port 8070.

# Contenu évaluation

## 1 : Cloner le projet (1pt)

Le projet devra être cloné sur votre machine locale à partir de l'URI suivante :

```bash
git clone git@bitbucket.org:virtuoworks/eval-productivite-rattrapage.git
```

## 2 : Créer une branche (1pt)

Vous créerez une branche que vous appellerez "rattrapage" et vous vous positionnerez dessus.
Ce sera votre branche de travail pour l'évaluation. Vous la fusionnerez avec la branche "main" à la fin de l'évaluation.

Basculez sur cette branche.

## 3 : Installer les dépendances (1pt)

Installez les dépendances du projet en utilisant le gestionnaire de paquet `npm`.

## 4 : Documenter le code (2pts)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

1. Vous utiliserez JSDoc, dont la documentation peut être consultée [ici](https://jsdoc.app/about-getting-started.html)
2. Ajoutez vos modifications au dépôt sur la branche "rattrapage" et faire un commit avec le titre de la question comme message.

## 5 : Linter le code (2pts)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

1. Vous utiliserez ESLint pour linter le code (ESLint est déjà installé dans le projet). La documentation est consultable [ici](https://eslint.org/docs/user-guide/getting-started)
2. Ajoutez vos modifications au dépôt sur la branche "rattrapage" et faire un commit avec le titre de la question comme message.

## 6 : Embellir le code (1pt)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

1. En utilisant Prettier, dont la documentation peut être trouvée [ici](https://prettier.io/docs/en/install.html), vous embellirez le code afin qu'il respecte les bonnes pratiques.
2. Ajoutez vos modifications au dépôt sur la branche "rattrapage" et faire un commit avec le titre de la question comme message.

## 7 : Renforcer le code (3pts)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

Dans le projet a été intégrée une faille de sécurité béante...

Insérez la chaîne de caractères suivante dans le champ du formulaire :

```javascript
'<script>for(let i = 1; i < 20; i++) { alert(`Je suis une pop-up super énervante qui est apparue ${i} fois !`) }</script>';
```

1. Corrigez cette faille de sécurité.
2. Ajoutez vos modifications au dépôt sur la branche "rattrapage" et faire un commit avec le titre de la question comme message.

## 8 : Modulariser le code (3pts)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

Le code du fichier `fetchData.js` utilise deux fonctions principales permettant d'intéragir avec l'API. Vous ferez de sorte de :

1. Extraire la fonction `fetchFreshPoint` dans un fichier à part que vous nommerez `fetchFreshPoint.js` (par un export par défaut ou un export nommé) ;
2. Créer un fichier main.js que vous placerez dans le dossier `/public/js` ;
3. Importer la fonction extraite dans le fichier `main.js` ;
4. Modifier le code du fichier index.html afin qu'il charge le script `main.js` ;
5. Ajoutez vos modifications au dépôt sur la branche "rattrapage" et faire un commit avec le titre de la question comme message.

## 9 : Tester le code (3pts)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

1. En utilisant Jest, qui est installé dans le projet, vous créerez un test unitaire pour la fonction présente dans le fichier `/public/js/functionToTest.js` (concatenateStrings).
2. Ajoutez vos modifications au dépôt sur la branche "rattrapage" faire un commit avec le titre de la question comme message.

Vous vérifierez bien que votre test unitaire passe.

## 10 : Fusionner les branches (1pt)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

Vous fusionnerez votre branche "rattrapage" avec la branche "main". Si vous avez des conflits de fusion, corrigez les.

## 11 : Créer un dépôt distant (1pt)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

Sur GitHub ou Bitbucket, à votre convenance, vous créerez un dépôt distant public afin de pouvoir y envoyer le code de votre application.

## 12 : Sauvegarder le code en ligne (1pt)

Si vous êtes bloqué(e) sur cette question, passez à la suivante.

Changer l'url du dépôt distant (la notre) par celle de votre dépôt local (la votre) et envoyez le code de votre branche "main" sur votre dépôt distant nouvellement créé.

# Après l'évaluation

Une fois l'évaluation terminée, vous déposerez le lien vers votre dépôt distant sur la plateforme LMS de l'IFOCOP et vous m'enverrez un courriel à mon adresse alexandre.masson@virtuoworks.com en mettant en copie mhamdouni@ifocop.fr en précisant dans l'objet de l'e-mail les informations suivantes : [NOM] [prénom] [Promotion DIWJS]

Si vous **n'avez pas réussi** à créer le dépôt distant ou pousser votre branche sur le dépôt distant, vous pouvez créer une archive zip avec votre dossier de travail **SANS le SOUS-DOSSIER** `node_modules` puis la déposer sur la plateforme LMS de l'IFOCOP et me l'envoyer par courriel à l'adresse alexandre.masson@virtuoworks.com et en copie à mhamdouni@ifocop.fr en précisant dans l'objet de l'e-mail les informations suivantes : [NOM] [prénom] [Promotion DIWJS]
