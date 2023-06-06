function* fibGenerator() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield prev;
    [prev, curr] = [curr, prev + curr];
  }
}

function* evenFibGenerator() {
  let sequence = fibGenerator();
  while (true) {
    let number = sequence.next().value;
    if (number % 2 === 0) yield number;
  }
}

let sequence = evenFibGenerator();
for(let i = 0; i < 6; i++) {
  console.log(sequence.next().value);
}
