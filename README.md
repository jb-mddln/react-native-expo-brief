
# Brief React Native
* Continuer la prise en main de React Native avec EXPO

### Contexte du projet
 * Réaliser un simple formulaire comprenant :
	* Un champ pour choisir le type d'alerte parmi les options telles que voirie, stationnement, travaux, etc.
	* Un champ de texte (textarea) pour décrire en détail l'alerte.
	* Un champ pour saisir la date/heure de l'incident.
	* Un champ interactif de carte pour spécifier l'emplacement de l'incident, avec la possibilité de géolocalisation.
	* Un champ pour prendre une photo en utilisant l'appareil photo du smartphone.
	* Les champs d'informations classiques tels que le nom, le prénom, l'adresse, le code postal, la ville, l'adresse e-mail et le numéro de téléphone.

### Bonus
* Option pour envoyer une vidéo d'une durée maximale de 30 secondes.
* Intégration de reCAPTCHA de Google pour la sécurité.
* Affichage d'un bandeau de consentement pour les cookies avant d'utiliser l'application.
* Possibilité de naviguer vers la page des mentions légales de l'application.
* Chaque alerte doit être envoyée à une adresse e-mail spécifique en fonction du type d'alerte. Par exemple, les alertes liées à la voirie doivent être envoyées à l'adresse voirie@simplonville.co, et ainsi de suite.

### Rendu
1er projet en React/React Native. L'application n'est pas encore terminée, et certains éléments importants du cahier des charges manquent, tels que l'envoi d'e-mails, l'ajout de photos et l'utilisation de la caméra.

L'application se compose d'une page d'accueil avec un bouton qui nous redirige vers notre formulaire. Le formulaire comprend quelques éléments basiques, notamment le nom, le prénom, la carte et l'affichage de l'adresse grâce à l'api geoapify.

<details>
    <summary>Rendu sur IOS + QR Code ExpoGo pour tester l'application en live</summary>
    <ul>
        <li>
            <p>1er rendu 20/09/23</p>
            <img width="25%" src="ios-1.gif" alt="Rendu 1 sur iOS">
        </li>
        <li>
            <p>2e rendu 22/09/23</p>
            <img width="25%" src="ios-2.gif" alt="Rendu 2 sur iOS">
        </li>
    </ul>
    <ul>
        <li>
            <p>Android</p>
            <img width="25%" src="android-qr-code.png" alt="QR Code Android">
        </li>
        <li>
            <p>IOS</p>
            <img width="25%" src="ios-qr-code.png" alt="QR Code IOS">
        </li>
    </ul>
</details>