// console.log('hola');

function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

// función orden superior
function operation(fn, a, b) {
  console.log('se hace algo');
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// arrow funcion
operation((a, b) => a * b, 5, 5);

operation((a, b) => {

  const c = a + b;

  return c * 2;

}, 1, 2);