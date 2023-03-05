// component principal
class ClientComponent {

  constructor(url) {
    this.url = url;
  }

  async getData() {

    const res = await fetch(this.url);

    const data = await res.json();

    return data;
  }

}

// decorator
class ClientDecorator {

  constructor(clientComponent) {
    this.clientComponent = clientComponent;
  }

  async getData() {
    return await this.clientComponent.getData();
  }

}

// decorator 1
class UpperCaseClientDecorator extends ClientDecorator {

  async getData() {

    const data = await super.getData();

    const newData = data.map(el => {

      el.title = el.title.toUpperCase();

      return el;
    });

    return newData;
  }

}

// decorator 2
class HtmlClientDecorator extends ClientDecorator {

  async getData() {

    const data = await super.getData();

    const newData = data.map(el => {

      el.title = `<h1>${el.title}</h1>`;

      el.thumbnailUrl = `<img src='${el.thumbnailUrl}' alt='${el.title}'>`

      return el;
    });

    return newData;
  }

}

(async () => {

  const url = 'https://jsonplaceholder.typicode.com/photos';

  const client = new ClientComponent(url);

  const data = await client.getData();
  // console.log(data);

  const upperClient = new UpperCaseClientDecorator(client);

  const data2 = await upperClient.getData();
  // console.log(data2);

  const htmlClient = new HtmlClientDecorator(upperClient);
  const data3 = await htmlClient.getData();
  // console.log(data3);

  content1.innerHTML = data3.reduce((ac, el) => ac + el.title + el.thumbnailUrl, '');

  const htmlClient2 = new HtmlClientDecorator(client);
  const data4 = await htmlClient2.getData();
  // console.log(data4);

  content2.innerHTML = data4.reduce((ac, el) => ac + el.title + el.thumbnailUrl, '');

})();