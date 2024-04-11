// Générer un chiffre aléatoire entre 1 et 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Récupérer l'élément d'entrée de l'utilisateur
const guessInput = document.getElementById('guess');

// Récupérer l'élément pour afficher le message
const message = document.getElementById('message');

// Fonction pour vérifier le chiffre saisi par l'utilisateur
function checkGuess() {
    // Récupérer la valeur saisie par l'utilisateur
    const userGuess = parseInt(guessInput.value);

    // Vérifier si la saisie est un nombre
    if (isNaN(userGuess)) {
        message.textContent = "Veuillez entrer un nombre valide.";
        return;
    }

    // Vérifier si le nombre est compris entre 1 et 100
    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Le nombre doit être compris entre 1 et 100.";
        return;
    }

    // Vérifier si le chiffre saisi par l'utilisateur correspond au chiffre mystère
    if (userGuess === randomNumber) {
        message.textContent = `Félicitations ! Vous avez deviné le chiffre mystère (${randomNumber}) !`;
    } else if (userGuess < randomNumber) {
        message.textContent = "Le chiffre mystère est plus grand.";
    } else {
        message.textContent = "Le chiffre mystère est plus petit.";
    }
}
