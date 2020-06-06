class Player {
  constructor(wins, hand) {
    this.wins = wins;
    this.hand = hand;
    this.id = Date.now();

  }

  saveWinsToStorage() {

  }

  playCard() {
    start.pile.unshift(this.hand[0]);
    this.hand.shift(this.hand[0]);
  }

  slap() {
    for (var i = 0; i < start.pile.length; i++) {
      this.hand.unshift(start.pile[i]);
  }
  start.pile = [];
    //slap the fuckin cards
  }
}
