class Game {
  constructor() {
    var cardNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 'jack', 'queen', 'king'];
    var cardColor = ['blue', 'green', 'gold', 'red'];
    this.deck = [];
    this.pile = [];
    for (var j = 0; j < cardColor.length; j++) {
      for (var i = 0; i < cardNumber.length; i++) {
        this.deck.push(`'assets/${cardColor[j]}-${cardNumber[i]}.png'`);
      }
    }
  }

  logKey(event) {
    if (event.key === 'q' && playerA.turn === true) {
      event.preventDefault();
      playerA.playCard();
      playerB.turn = true
    }
    if (event.key === 'f') {
      event.preventDefault();
      playerA.slap()
    }
    if (event.key === 'p' && playerB.turn === true) {
      event.preventDefault();
      playerB.playCard();
      playerA.turn = true;
    }
    if (event.key === 'j') {
      event.preventDefault();
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

  decideTurn() {
    // if (playerA.turn === true) {
    //   playerA.playCard();
    //   playerB.turn = true
    // } else {
    //   playerB.playCard();
    //   playerA.turn = true
    // }
    //I think i have to log keyKey first, and then set specific key to reassing specific value of turn
  }

  // slap() {
  //
  //   //slap the fuckin cards
  // }
}
