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
function highestCount(array) {
  let valorMaior = array[0];
  let contador = 0;
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > valorMaior) {
      valorMaior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === valorMaior) {
      contador += 1;
    }
  }
  return contador;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciag1 = Math.abs(cat1 - mouse);
  let distanciag2 = cat2 - mouse;
  if (distanciag1 > distanciag2) {
    return 'cat2';
  } if (distanciag2 > distanciag1) {
    return 'cat1';
  } if (distanciag1 === distanciag2) {
    return 'os gatos trombam e o rato foge';
  }
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
