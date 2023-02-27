// console.log('holaa desde ts');

class Drinks {

  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }

}

const drinka = new Drink('agua');
console.log(drinka.info());

// herencia en ts
class Beers extends Drinks {

  private alcohol: number;

  constructor(name: string, alcohol: number) {

    super(name);

    this.alcohol = alcohol;

  }

  info(): string {
    return super.info() + ' ' + this.alcohol;
  }

}

const beers = new Beers('Vodka', 8.5);
console.log(beers.info());