# Test-Dev-Cecile
Crawler API

L’objectif de cet exercice est de développer un “Worker” et un “service” en NodeJs
qui vont récupérer les articles en provenance de divers flux RSS, les normaliser
(img, vidéo, titre, auteur, nom de la source, url, etc.) et les insérer dans une base de
données.

Quelques indications pour réaliser le test :
● Le worker va récupérer en boucle les derniers articles sur les flux RSS pour
les envoyer au service.
● Le service API va recevoir les articles via un route “POST”. Il va normaliser
les résultats, c’est à dire faire en sort que les propriétés de l'objet soit
identiques peut importe la provenance du flux RSS.

Ces nouveaux articles normalisés seront seront sauvegardées dans une BDD
de votre choix.
● Ce programme devra être capable de supporter jusqu’à 10k Rss à scrapper le
plus souvent possible.
Pour cela, on utilisera:
● nodeJ
● Express 4
● les flux suivants:
a. http://www.jeuxvideo.com/rss/rss.xml

b. http://www.jeuxvideo.com/rss/rss-news.xml

c. http://www.jeuxvideo.com/rss/itunes-chroniques.xml

d. https://news.google.com/news?ned=fr&num=100&output=rss&q=(%22
starwars%22

e. http://www.jeuxvideo.com/rss/rss-videos.xml

f. http://www.numerama.com/feed/

g. https://news.ycombinator.com/rss


Vous aurez besoin des packages suivants :

● https://www.npmjs.com/package/feedparser / Pour lire les flux RSS.

● https://www.npmjs.com/package/request / Pour envoyer les articles entre le
worker et le service.
