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
    // showHand();
    //run over this once more. Do i need line 18?
    // look into splice some more to refactor this
  }

  slap() {
    if ((start.pile[0]["cardNumber"] === "jack") || ((start.pile[0]["cardNumber"]) === (start.pile[1]["cardNumber"])) || ((start.pile[0]["cardNumber"]) === (start.pile[2]["cardNumber"]))) {
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
