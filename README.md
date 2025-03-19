# Portfolio BTS SIO

Un portfolio moderne et épuré pour présenter vos compétences, projets et expériences en tant qu'étudiant(e) en BTS SIO.

## Fonctionnalités

- Design responsive moderne et épuré
- Section "À propos" pour vous présenter
- Timeline pour afficher votre parcours
- Galerie de projets avec liens vers GitHub et documentation
- Section expériences avec lien vers un PDF récapitulatif
- Section veille technologique pour présenter votre méthodologie et vos recherches
- Formulaire de contact fonctionnel

## Structure du projet

```
portfoliov2/
│
├── index.php          # Page principale du portfolio
├── contact.php        # Traitement du formulaire de contact
├── README.md          # Ce fichier d'instructions
│
├── assets/
│   ├── css/
│   │   └── style.css  # Styles CSS du portfolio
│   │
│   ├── js/
│   │   └── main.js    # Scripts JavaScript
│   │
│   ├── img/           # Dossier des images
│   │   ├── profile.jpg    # Votre photo de profil
│   │   └── projets/       # Screenshots de vos projets
│   │
│   └── docs/          # Documents PDF (synthèse, documentation)
│       └── synthese_experiences.pdf
```

## Personnalisation

Pour personnaliser votre portfolio, vous devez :

1. Remplacer les textes par défaut dans `index.php` par vos informations
2. Ajouter votre photo dans `assets/img/profile.jpg`
3. Ajouter des captures d'écran de vos projets dans `assets/img/projets/`
4. Uploader votre synthèse d'expériences et documentation de projets dans `assets/docs/`
5. Modifier les liens vers vos réseaux sociaux dans le footer
6. Mettre à jour votre email dans `contact.php`

## Configuration requise

- PHP 7.0 ou supérieur
- Serveur web (Apache, Nginx, etc.)

## Installation

1. Téléchargez ou clonez ce dépôt sur votre serveur web
2. Assurez-vous que le serveur est configuré pour exécuter PHP
3. Personnalisez le contenu comme indiqué ci-dessus
4. Accédez au site via votre navigateur

## Remarques

- Pour la section veille technologique, vous pouvez ajouter des articles au format HTML dans la section correspondante
- Le formulaire de contact envoie les messages à l'adresse email spécifiée dans `contact.php`

---

Créé pour les étudiants en BTS SIO - Services Informatiques aux Organisations 