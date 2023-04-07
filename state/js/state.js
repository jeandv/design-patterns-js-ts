class DocumentContext {

  constructor() {
    this.content = '';
    this.state = new BlankState();
  }

  setState(state) {
    this.state = state;
  }

  write(text) {
    this.state.write(this, text);
  }

}

class BlankState {

  write(documentContext, text) {
    documentContext.content = text;
    documentContext.setState(new WithContentState());
  }

}

class WithContentState {

  write(documentContext, text) {
    documentContext.content += ' ' + text;
  }

}

class ApprovedState {

  write(documentContext, text) {
    console.error('doc aprobado ya no se modifica')
  }

}

const doc = new DocumentContext();

console.log(doc.state);

doc.write('hola');

console.log(doc.content);
console.log(doc.state);

doc.write('como');
doc.write('estas?');

console.log(doc.content);
console.log(doc.state);

doc.setState(new ApprovedState());
console.log(doc.state);
// no se puede.
doc.write('otra cosa');
console.log(doc.content);
//ahora si
doc.setState(new WithContentState());
doc.write('ahora si');
console.log(doc.state);
console.log(doc.content);





