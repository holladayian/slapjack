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
    this.hand.unshift(start.pile.length);
    start.pile.shift(start.pile.length);
    //slap the fuckin cards
  }
}
