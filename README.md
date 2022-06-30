# roadtrack

# Installation du projet

1. Git clone du repository
2. Pour chaque dossier track et Backend, tapez le script suivant : `npm install`
3. Dans le dossier back à rajouter un fichier `.env` pour les variables de l'environnement back

- ```DB_HOST=localhost```
- ```DB_PORT=3306```
- ```DB_USER=root```
- ```DB_PASS=```
- ```DB_BASE=sully2```
- ```PORTS=3000```
- ```IP_CLIENT=192.168.0.99```

**Note :** la base de donnée du projet est sur mysql, à bien vérifier les variables demandées dans le fichier `.env`


## Commençons par la partie back

- Dans la racine du projet (Backend), tapez la commande suivante :
```npm run start```
- S'il y a pas d'erreur vous trouverez dans votre console IDE un message :
```Serveur connecté sur DBPORT```


## La partie front

- Dans la racine du projet (Tack), tapez la commande suivante :
```ns run android```
- S'il y a pas d'erreur vous trouverez directement dans l'application quelque soit en émulateur ou physique
