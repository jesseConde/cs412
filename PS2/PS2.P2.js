function* wordGenerator(sentence) {
  let words = sentence.split(' ');
  for (let word of words) {
    yield word;
  }
}

let sentence = "All I know is something like a bird within her sang";
let sequence = wordGenerator(sentence);
for(let word of sequence) {
  console.log(word);
}
