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

const drinks = new Drinks('agua');
console.log(drinks.info());

// interfaces en ts
interface Product {
  price: number;
  getPrice(): string;
}

// herencia en ts
class Beers extends Drinks implements Product {

  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {

    super(name);

    this.alcohol = alcohol;
    this.price = price;

  }

  getPrice(): string {
    return 'El precio de ' + super.info() + ' es: $ ' + this.price;
  }

  info(): string {
    return 'El precio de ' + super.info() + ' es ' + this.alcohol;
  }

}

// implementación de interface
class Snack implements Product {

  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return 'El precio del producto ' + this.name + ' es: $ ' + this.price;
  }

}

// const beers = new Beers('Vodka', 8.5, 120);
// console.log(beers.info());

const products: Product[] = [
  new Beers('Tequila', 8.5, 75),
  new Snack('Dorito', 10),
  new Beers('Polar', 5.5, 25),
]

function getPrices(items: Product[]) {

  for (const item of items) {
    console.log(item.getPrice());
  }

}

getPrices(products);