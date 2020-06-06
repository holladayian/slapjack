var displayedCards = document.querySelector(".displayed-cards");
var shuffleCard = document.querySelector(".shuffle-card");

var playerA = new Player();
var playerB = new Player();
var start = new Game();

var pile;

// displayedCards.addEventListener('keydown', start.logKey);
shuffleCard.addEventListener('click', start.shuffle);



//Make sure all ' ' or " "
