class CardList {
  constructor() {
    this.deck = [];
    this.cardNumber = ['01', '02', '03', '04', '05', '06', '07', '08', '09', 10, 'jack', 'queen', 'king'];
    this.cardColor = ['blue', 'green', 'gold', 'red'];
    for (var j = 0; j < this.cardColor.length; j++) {
      this.cardColor = this.cardColor[i]
    }
    for (var i = 0; i < this.cardNumber.length; i++) {
      this.cardNumber = this.candNumber[i]
    }
    this.deck.push(`assets/${this.cardColor[j]}-${this.cardNumber[i]}.png`);
  }
}
