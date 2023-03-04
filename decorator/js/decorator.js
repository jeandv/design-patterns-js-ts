
// Componente
class ProductComponent {

  constructor(name) {
    this.name = name;
  }

  getDetail() {
    return `${this.name}`;
  }

}

// decorator principal
class ProductDecorator {

  constructor(productComponent) {
    this.productComponent = productComponent;
  }

  getDetail() {
    return this.productComponent.getDetail();
  }

}

// decorator 1
class CommercialInfoProductDecorator extends ProductDecorator {

  constructor(productComponent, tradeName, brand) {
    super(productComponent);
    this.tradeName = tradeName;
    this.name = brand;
  }

  getDetail() {
    return `${this.tradeName} ${this.name} ` + super.getDetail();
  }

}

// decorator 2
class StoreProductDecorator extends ProductDecorator {

  constructor(productComponent, price) {
    super(productComponent);

    this.price = price;
  }

  getDetail() {
    return super.getDetail() + `: $${this.price}`;
  }

}

// decorator 2
class HTMLProductDecorator extends ProductDecorator {

  getDetail() {
    return `
    <h1>Información del producto</h1>
    <p>${super.getDetail()}</p>
    `;
  }

}

// EJECUCIÓN:

// component
const productComponent = new ProductComponent('Arepa');
console.log(productComponent.getDetail());

// decorator 1 con component
const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, 'Venezuela', 'Harina PAN');
console.log(commercialInfoProduct.getDetail());


// decorator 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 24);
console.log(storeProduct.getDetail());

// decorator 3 con decorator 1
const productInfoToShow = new StoreProductDecorator(commercialInfoProduct, 24);
console.log('COMBINACIÓN DE CLASSES: ' + productInfoToShow.getDetail());

// decorator 3 con decorator 2 con decorator 1
const htmlProductDecorator = new HTMLProductDecorator(productInfoToShow);
myDiv.innerHTML = htmlProductDecorator.getDetail();
