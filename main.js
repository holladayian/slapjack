var displayedCards = document.querySelector(".displayed-cards");
var shuffleCard = document.querySelector(".shuffle-card");

var playerA = new Player();
var playerB = new Player();
var start = new Game();




window.addEventListener('keydown', start.logKey);
shuffleCard.addEventListener('click', start.shuffle);



var pileCard = document.querySelector('.pile');

//Make sure all ' ' or " "
