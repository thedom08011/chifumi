document.addEventListener('DOMContentLoaded', function() {
    // Sélectionnez toutes les images dans le conteneur
    const images = document.querySelectorAll('.pointer img');

	let joueurUn = "player1";
	//let joeurDeux = player2;

	let scorePlayer1 = 0;
	let scorePlayer2 = 0;

	function player1Click(event) {
		switch (event.target.id) {
			case 'image1':
            console.log(joueurUn + ' Vous avez cliqué sur la feuille.');
				break;
			case 'image2':
            console.log(joueurUn + ' Vous avez cliqué sur la pierre.');
				break;
			case 'image3':
            console.log(joueurUn + ' Vous avez cliqué sur les ciseaux.');
				break;
			default:
            console.log('Clique non reconnu.');
		}
	}

	images.forEach(image => {
		image.addEventListener('click', player1Click);
	});

	function player2Click() {
		const images = ['image1', 'image2', 'image3'];
		const randomIndex = Math.floor(Math.random() * images.length);
		const selectedImageId = images[randomIndex];
	
		const selectedImageElement = document.getElementById(selectedImageId);
		const choix = selectedImageElement.alt;  // récupère l'attribut alt pour déterminer le choix
	
		const displayElement = document.getElementById('choixJoueurDeux');
		displayElement.innerHTML = "Joueur 2 a choisi " + choix;
	}	
	player2Click();
}); // Fermez la fonction DOMContentLoaded et l'addEventListener


function win(){
	if (player1Click === 'image1' && player2Click === 'image2'){
		 console.log(joueurUn + "win");
	}
}

