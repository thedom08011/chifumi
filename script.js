document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez toutes les images dans le conteneur
    const images = document.querySelectorAll('.pointer img');

	let joueurUn = 'joueur 1';
	let joueurDeux = 'joueur 2';
 
	let scorePlayer1 = 0;
	let scorePlayer2 = 0;
	
// mettre le bouton dans le DOM. sans cette ligne rien ne se passe quand on clique sur le bouton	
	document.getElementById("reset").addEventListener('click', resetScore);

// Fonction qui gère les clics sur les images pour le joueur 1.
	function player1Click(event) {
		let choixJoueur1;
		var resultText = '';
		switch (event.target.id) {
			case 'image1':
            resultText = (' Vous avez choisi la feuille.');
			choixJoueur1 = 'feuille';
				break;
			case 'image2':
			resultText = (' Vous avez choisi la pierre.');
			choixJoueur1 = 'pierre';
				break;
			case 'image3':
			resultText =(' Vous avez choisi les ciseaux.');
			choixJoueur1 = 'ciseaux';
				break;
			default:
            console.log('Clique non reconnu.');
			return; // sert a sortir de la fonction si le clique n'est pas reconnu
		}
		player2Click(choixJoueur1); // l'argument est important pour permettre de comparé le choix du joueur 1 et 2
		var texteElement = document.getElementById('text');
		texteElement.innerText = resultText;
		texteElement.style.display = 'block';
		
	}


// Fonction qui génère un choix aléatoire pour le joueur 2.
	function player2Click(choixJoueur1) {
		const choixPossible = ['feuille', 'pierre', 'ciseaux'];
		const randomIndex = Math.floor(Math.random() * choixPossible.length);
		const choixJoueur2 = choixPossible[randomIndex]; // Ici, vous obtenez 'image1', 'image2' ou 'image3', mais vous avez besoin de 'feuille', 'pierre' ou 'ciseaux'
		var joueur2ResultText = '';
	
		switch (choixJoueur2) {
			case 'feuille':
				joueur2ResultText = 'Le joueur 2 a choisi la feuille.';
				break;
			case 'pierre':
				joueur2ResultText = 'Le joueur 2 a choisi la pierre.';
				break;
			case 'ciseaux':
				joueur2ResultText = 'Le joueur 2 a choisi les ciseaux.';
				break;
			default:
				joueur2ResultText = 'Erreur: Choix non reconnu.';
				break;
		}
		var resultJoueur2 = document.getElementById('text2');
		resultJoueur2.innerText = joueur2ResultText;
		resultJoueur2.style.display = 'block';

		 // Appelle la fonction pour déterminer le gagnant avec les choix des deux joueurs.
		 determineWinner(choixJoueur1, choixJoueur2);
	}	
	  // Ajoute un écouteur d'événement pour chaque image pour gérer le clic du joueur 1.
	  images.forEach(image => {
        image.addEventListener('click', player1Click);
    });



	// Fonction qui compare les choix des joueurs et détermine le gagnant.
	function determineWinner(choixJoueur1, choixJoueur2) {
		let message = "";
		if (choixJoueur1 === choixJoueur2) {
			message = "Égalité!";
		} else if (
			(choixJoueur1 === 'feuille' && choixJoueur2 === 'pierre') ||
			(choixJoueur1 === 'pierre' && choixJoueur2 === 'ciseaux') ||
			(choixJoueur1 === 'ciseaux' && choixJoueur2 === 'feuille')
		) {
			scorePlayer1++; // Incrémente le score du joueur 1
			message = joueurUn + " gagne!";
		} else {
			scorePlayer2++; // Incrémente le score du joueur 2
			message = joueurDeux + " gagne!";
		}
		document.getElementById('resultMessage').innerText = message;
		updateScore();
	}
	



	function updateScore() {
		document.getElementById('scorePlayerOne').textContent = "Me: " + scorePlayer1;
		document.getElementById('scorePlayerTwo').textContent = "Computer: " + scorePlayer2;
	}
	
	function resetScore(){
		scorePlayer1 = 0;
		scorePlayer2 = 0;
		document.getElementById("scorePlayerOne").textContent = "Me : 0";
		document.getElementById("scorePlayerTwo").textContent = "Computer : 0";
		document.getElementById("resultMessage").textContent = "";
		document.getElementById("resultMessage").textContent = "";
		document.getElementById("text").textContent = "";
		document.getElementById("text2").textContent = "";
		}
	
}); // Fin de l'écouteur d'événement 'DOMContentLoaded'.






