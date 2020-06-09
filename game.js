class Game {
  constructor(cards) {
    this.catch;
    this.deck = cards;
    this.pile = [];

  }

  logKey(event) {
    event.preventDefault();
    if (event.key === 'q' && playerA.turn !== false) {
      playerA.playCard();
      playerA.turn = false;
      playerB.turn = true;
    }
    if (event.key === 'f') {
      playerA.slap()
    }
    if (event.key === 'p' && playerB.turn !== false) {
      playerB.playCard();
      playerB.turn = false;
      playerA.turn = true;
    }
    if (event.key === 'j') {
      playerB.slap()
    }
  }
  //maybe SRP this logKey function up laters

  shuffle() {
    if (this.deck !== []) {
      var i, j, x;
      for (i = 0; i < this.deck.length; i++) {
        j = Math.floor(Math.random() * (i + 1));
        x = this.deck[i];
        this.deck[i] = this.deck[j];
        this.deck[j] = x;
      }
      this.deal();
    }
  }

  deal() {
    playerB.hand = (this.deck.slice(26, 53));
    playerA.hand = (this.deck.slice(0, 26));
    this.deck = [];
    //see if I can refactor this so i dont have to reset this.deck = []
  }
  checkSlap() {
    if ((this.pile[0].includes('jack')) || ((this.pile[0].includes(this.cardNumber[i])) === ((this.pile[1].includes(this.cardNumber[i])) || (this.pile[2].includes(this.cardNumber[i]))))) {
      this.catch = true;
    } else {
      this.catch = false;
    }
  }
}
