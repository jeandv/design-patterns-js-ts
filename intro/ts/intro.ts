// console.log('holaa desde ts');

class Drink {

  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }

}

const drink = new Drink('agua');
console.log(drink.info());