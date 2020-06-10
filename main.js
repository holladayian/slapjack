var displayedCards = document.querySelector(".displayed-cards");
var shuffleCard = document.querySelector(".shuffle-card");


var cardList = [];
var cardColor = ['blue', 'green', 'gold', 'red'];
var cardNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 'jack', 'queen', 'king'];
for (var j = 0; j < cardColor.length; j++) {
  for (var i = 0; i < cardNumber.length; i++) {
    cardList.push({cardColor: cardColor[j], cardNumber: cardNumber[i]});
  }
}

var playerA = new Player();
var playerB = new Player();
var start = new Game(cardList);



window.addEventListener('keydown', start.logKey);
shuffleCard.addEventListener('click', start.shuffle);



var pileCard = document.querySelector('.pile');

function showPile() {
   pileCard.innerHTML = '';
   pileCard.insertAdjacentHTML('afterbegin', `<img class="pile-card" src="assets/${start.pile[0]["cardColor"]}-${start.pile[0]["cardNumber"]}.png">`);

}

//Make sure all ' ' or " "
