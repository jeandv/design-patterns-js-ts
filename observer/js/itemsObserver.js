class Subject {

  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(e => e.refresh(data));
  }

}

class ItemsSubject extends Subject {

  constructor() {

    super();

    this.data = [];

  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }

}

class HtmlElementObserver {

  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acc, ele) => acc + `<p>${ele}</p>`, '');
  }

}

const items = new ItemsSubject();

const div1Observer = new HtmlElementObserver(div1);

items.subscribe(div1Observer);

function add() {
  const name = txtName.value;

  items.add(name);
}