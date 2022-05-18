// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let resultado = phrase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(array) {
  return `${(array[array.length - 1])}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsVictories = 0;
  let pointsATie = 0;
  let total = 0;
  pointsVictories = wins * 3;
  pointsATie = ties * 1;
  total = pointsVictories + pointsATie;
  return total;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
