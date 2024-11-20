//  --------- Public ---------
/*
class Player {
  public readonly first: string;
  public readonly last: string;
  public score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
}

const dog1 = new Player("Elton", "Steele");
console.log(dog1.score);
*/
// --------- Private ---------
/*
class Player {
  public readonly first: string;
  public readonly last: string;
  private score: number = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  private secretMethod(): void {
    console.log("Secret Method");
  }
}

const dog1 = new Player("Elton", "Steele");
// console.log(dog1.score);
// dog1.secretMethod();
*/

//  --------- Protected ---------
class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number
  ) {}

  get score(): number {
    return this._score;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999;
  }
}

const dog1 = new Player("Elton", "Steele", 10);
