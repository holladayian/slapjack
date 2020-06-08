class Game {
  constructor() {
    var cardNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 'jack', 'queen', 'king'];
    var cardColor = ['blue', 'green', 'gold', 'red'];
    this.deck = [];
    this.pile = [];
    for (var j = 0; j < cardColor.length; j++) {
      for (var i = 0; i < cardNumber.length; i++) {
        this.deck.push(`assets/${cardColor[j]}-${cardNumber[i]}.png`);
      }
    }
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
}
