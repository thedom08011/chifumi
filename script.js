document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez toutes les images dans le conteneur
    const images = document.querySelectorAll('.pointer img');

	let joueurUn = 'joueur 1';
	let joueurDeux = 'joueur 2';
 
	let scorePlayer1 = 0;
	let scorePlayer2 = 0;

// Fonction qui gère les clics sur les images pour le joueur 1.
	function player1Click(event) {
		let choixJoueur1;
		switch (event.target.id) {
			case 'image1':
            console.log(joueurUn + ' Vous avez cliqué sur la feuille.');
			choixJoueur1 = 'feuille';
				break;
			case 'image2':
            console.log(joueurUn + ' Vous avez cliqué sur la pierre.');
			choixJoueur1 = 'pierre';
				break;
			case 'image3':
            console.log(joueurUn + ' Vous avez cliqué sur les ciseaux.');
			choixJoueur1 = 'ciseaux';
				break;
			default:
            console.log('Clique non reconnu.');
			return; // sert a sortir de la fonction si le clique n'est pas reconnu
		}
		player2Click(choixJoueur1); // l'argument est important pour permettre de comparé le choix du joueur 1 et 2
	}




// Fonction qui génère un choix aléatoire pour le joueur 2.
	function player2Click(choixJoueur1) {
		const choixPossible = ['image1', 'image2', 'image3'];
		const randomIndex = Math.floor(Math.random() * choixPossible.length);
		const choixJoueur2 = choixPossible[randomIndex];

		console.log(joueurDeux + ' a choisi ' + choixJoueur2);

		 // Appelle la fonction pour déterminer le gagnant avec les choix des deux joueurs.
		 determineWinner(choixJoueur1, choixJoueur2);
	}	
	  // Ajoute un écouteur d'événement pour chaque image pour gérer le clic du joueur 1.
	  images.forEach(image => {
        image.addEventListener('click', player1Click);
    });



	// Fonction qui compare les choix des joueurs et détermine le gagnant.
    function determineWinner(choixJoueur1, choixJoueur2) {
        if (choixJoueur1 === choixJoueur2) {
            console.log("Égalité!");
        } else if (
            (choixJoueur1 === 'feuille' && choixJoueur2 === 'pierre') ||
            (choixJoueur1 === 'pierre' && choixJoueur2 === 'ciseaux') ||
            (choixJoueur1 === 'ciseaux' && choixJoueur2 === 'feuille')
        ) {
            console.log(joueurUn + " gagne!");
            scorePlayer1++; // Incrémente le score du joueur 1.
        } else {
            console.log(joueurDeux + " gagne!");
            scorePlayer2++; // Incrémente le score du joueur 2.
        }
        // Ici, vous pouvez ajouter du code pour mettre à jour l'affichage des scores sur votre page web.
    }
}); // Fin de l'écouteur d'événement 'DOMContentLoaded'.






