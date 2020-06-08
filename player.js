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
    start.pile.unshift(this.hand[0]);
    this.hand.shift(this.hand[0]);
    this.turn = false;
    // look into splice some more to refactor this
  }

  slap() {
    //if start.pile[0] === start.pile[2] || start.pile[0] === start.pile[1] || start.pile[0] === jack
    for (var i = 0; i < start.pile.length; i++) {
      this.hand.unshift(start.pile[i]);
  }
  start.pile = [];
  }
  //possibly use splice somehow to shorten this one up without having to reset start.pile = []
}
