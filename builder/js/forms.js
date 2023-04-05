class Form {

  constructor(controls, action) {
    this.controls = controls;
    this.action = action;
  }

  getContent() {
    return (
      `
      <form method="post" action="${this.action}">
      ${this.controls.reduce((acc, c) => {

        return acc + `<div>${this.getLabel(c)} ${this.getInput(c)}</div>`

      }, "")}

      <button type="submit">Enviar</button>

      </form>
      `
    )
  }

  getLabel(control) {
    return `<label>${control.text}</label>`
  }

  getInput(control) {
    return `<input type="${control.type}" id="${control.name}" name="${control.name}"/>`
  }

}

class FormBuilder {

  constructor() {
    this.reset();
  }

  reset() {
    this.action = '';
    this.controls = [];
  }

  setAction(action) {
    this.action = action;
    return this;
  }

  setText(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: 'text'
    });

    return this;
  }

  setEmail(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: 'email'
    });

    return this;
  }

  setCheckBox(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: 'checkbox'
    });

    return this;
  }

  setColor(name, text) {
    this.controls.push({
      name: name,
      text: text,
      type: 'color'
    });

    return this;
  }

  build() {
    const frm = new Form(this.controls, this.action);

    this.reset();

    return frm;
  }

}

class FormDirector {

  constructor(formBuilder) {
    this.setBuilder(formBuilder);
  }

  setBuilder(formBuilder) {
    this.formBuilder = formBuilder;
  }

  createPeopleForm() {
    this.formBuilder.reset();
    this.formBuilder.setText('firstName', 'Nombre')
      .setText('lastName', 'Apellido')
  }

  createContactForm() {
    this.formBuilder.reset();
    this.formBuilder.setText('firstName', 'Nombre')
      .setEmail('email', 'Correo')
      .setText('messge', 'Mensaje')


  }

}

const formBuilder = new FormBuilder();

const formPeople = formBuilder.setAction('add.php')
  .setText('firstName', 'Nombre')
  .setText('lastName', 'Apellido')
  .setCheckBox('edad', 'Eres mayor de edad?')
  .setColor('favColor', 'Escoge tu color favorito')
  .build();

console.log(formPeople);

form1.innerHTML = formPeople.getContent();

const formMail = formBuilder.setAction('send.php')
  .setText('firstName', 'Nombre')
  .setEmail('email', 'Correo')
  .build();

form2.innerHTML = formMail.getContent();


const director = new FormDirector(formBuilder);
director.createPeopleForm();
form3.innerHTML = formBuilder.build().getContent();

director.createPeopleForm();
form4.innerHTML = formBuilder.build().getContent();

director.createContactForm();
form5.innerHTML = formBuilder.build().getContent();