var displayedCards = document.querySelector(".displayed-cards");
var shuffleCard = document.querySelector(".shuffle-card");

displayedCards.addEventListener('keydown', logKey);
shuffleCard.addEventListener('click', shuffle);

function logKey(key) {
  if (this.key === 'q') {
    //playerA deal card
  }
  if (this.key === 'f') {
    //playerA slay
  }
  if (this.key === 'p') {
    //playerB deal card
  }
  if (this.key === 'j') {
    //playerB slap
  }
}

function shuffle() {
  //shuffle the fuckin cards
}



//Make sure all ' ' or " "
