class Player {
  constructor(wins, hand) {
    this.wins = wins;
    this.hand = hand;
    this.turn = true;
    this.id = Date.now();

  }

  saveWinsToStorage() {

  }



  playCard() {
    if (this.hand !== []) {
      start.pile.unshift(this.hand[0]);
      this.hand.shift(this.hand[0]);
      showPile();
    }
    showHand();
    //run over this once more. Do i need line 18?
    // look into splice some more to refactor this
    // pileCard.innerHTML = '';
    //make sure you refactor this part later to seperate the DOM and data model
    // pileCard.insertAdjacentHTML('afterbegin', `<img class="pile-card" src="${start.pile[0]}">`);
  }

  slap() {
    //if start.pile[0] === start.pile[2] || start.pile[0] === start.pile[1] || start.pile[0] === jack
    // refactor the above pseudocode. I want to somehow get cardNumber[i] of start.pile[0], maybe start.pile[0].cardNumber[i]...?

    if ((start.pile[0]["cardNumber"] === "jack") || ((start.pile[0]["cardNumber"]) === (start.pile[1]["cardNumber"])) || ((start.pile[0]["cardNumber"]) === (start.pile[2]["cardNumber"]))) {
    // || start.pile[0].cardNumber[i] === start.pile[1].cardNumber[i] || start.pile[0].cardNumber[i] === start.pile[2].cardNumber[i]) {
      for (var i = 0; i < start.pile.length; i++) {
        this.hand.unshift(start.pile[i]);
        //don't forget to reshuffle hand (will probably have to refactor game.shuffle()[maybe make it global] so it can take in the parameters of this.hand)
      }
      start.pile = [];
      console.log('good juju');
      } else {
      console.log('bad juju');
      this.playCard();
  }
// dont forget sometimes your pile will not have 2 cards, or even one card
  }
  //possibly use splice somehow to shorten this one up without having to reset start.pile = []
}
