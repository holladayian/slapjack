class Game {
  constructor() {
    this.deck = ['assets/blue-01.png', 'assets/blue-02.png', 'assets/blue-03.png', 'assets/blue-04.png', 'assets/blue-05.png', 'assets/blue-06.png', 'assets/blue-07.png', 'assets/blue-08.png', 'assets/blue-09.png', 'assets/blue-10.png', 'assets/blue-jack.png', 'assets/blue-queen.png', 'assets/blue-king.png', 'assets/gold-01.png', 'assets/gold-02.png', 'assets/gold-03.png', 'assets/gold-04.png', 'assets/gold-05.png', 'assets/gold-06.png', 'assets/gold-07.png', 'assets/gold-08.png', 'assets/gold-09.png', 'assets/gold-10.png', 'assets/gold-jack.png', 'assets/gold-queen.png', 'assets/gold-king.png', 'assets/green-01.png', 'assets/green-02.png', 'assets/green-03.png', 'assets/green-04.png', 'assets/green-05.png', 'assets/green-06.png', 'assets/green-07.png', 'assets/green-08.png', 'assets/green-09.png', 'assets/green-10.png', 'assets/green-jack.png', 'assets/green-queen.png', 'assets/green-king.png', 'assets/red-01.png', 'assets/red-02.png', 'assets/red-03.png', 'assets/red-04.png', 'assets/red-05.png', 'assets/red-06.png', 'assets/red-07.png', 'assets/red-08.png', 'assets/red-09.png', 'assets/red-10.png', 'assets/red-jack.png', 'assets/red-queen.png', 'assets/red-king.png'];
    //figure out how to do this with out manually inserting all cards
    //nested for loop
  }

  // logKey() {
  //   if (this.keyCode === 81) {
  //     playerA.deal()
  //   }
  //   if (this.keyCode === 70) {
  //     playerA.slap()
  //   }
  //   if (this.keyCode === 80) {
  //     playerB.deal()
  //   }
  //   if (this.keyCode === 74) {
  //     playerB.slap()
  //   }
  // }

  shuffle() {
    var i, j, x;
    for (i = 0; i < this.deck.length; i++) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = x;

      // this.deal();
    }
    console.log(this.deck);
    this.deal();
  }

  deal() {

    playerB.hand = (this.deck.slice(26, 53));
    playerA.hand = (this.deck.slice(0, 26));
    console.log(playerA.hand)
    // playerB.hand.push(this.deck[26-52]);
    // playerA.hand.push(this.deck[0-25]);

    //deal the fuckin cards
  }

  slap() {
    //slap the fuckin cards
  }
}
