/**
 * Example of Object class on Typescript
 *
 * class ObjectOop {
 *   private property1: string
 *   public property2: number
 *
 *   constructor(prop1: string, prop2: number) {
 *     this.property1 = prop1
 *     this.property2 = prop2
 *   }
 *
 *   method1(arg1: number) {
 *     this.property2 += arg1
 *   }
 * }
 *
 * class DeriveObjectOpp extends ObjectOop {
 *
 * }
 *
 * See class doc:  https://www.typescriptlang.org/docs/handbook/2/classes.html
 * See object doc: https://www.typescriptlang.org/docs/handbook/2/objects.html
 * See type doc:   https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
 */

class CardRankConstants {
  public static readonly JACK = 11;
  public static readonly QUEEN = 12;
  public static readonly KING = 13;
  public static readonly ACE = 14;
}

class CardSuitConstants {
  public static readonly CLUBS = 1;
  public static readonly DIAMONS = 2;
  public static readonly HEARTS = 3;
  public static readonly SPADES = 4;
}

class Card {
  /**
   * TODO: Implement methods
   *
   * constructor(rank, suit)
   * toString() => string
   */
}

// TODO: Implement Special Card class

class Deck {
  /**
   * TODO: Implement methods
   *
   * printCardList() => void
   */

  // TODO: Correct this method
  shuffle(): void {
    // for (let i = 0; i < /* cards length */; i++) {
    //   const randomNumber = /* random logic */
    //   const randomCard = card[randomNumber]
    //   // TODO: Swap these cards
    // }
  }
}

const main = () => {
  console.log("hello world!");
  // TODO: Write situation here
};

main();
