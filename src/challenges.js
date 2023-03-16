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
function fizzBuzz(array) {
  let string = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      string.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      string.push('fizz');
    } else if (array[index] % 5 === 0) {
      string.push('buzz');
    } else {
      string.push('bug!');
    }
  }
  return string;
}

// Desafio 9
function encode(string) {
  let codificar = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      codificar += '1';
    } else if (string[index] === 'e') {
      codificar += '2';
    } else if (string[index] === 'i') {
      codificar += '3';
    } else if (string[index] === 'o') {
      codificar += '4';
    } else if (string[index] === 'u') {
      codificar += '5';
    } else {
      codificar += string[index];
    }
  }
  return codificar;
}

function decode(string) {
  let codificar = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      codificar += 'a';
    } else if (string[index] === '2') {
      codificar += 'e';
    } else if (string[index] === '3') {
      codificar += 'i';
    } else if (string[index] === '4') {
      codificar += 'o';
    } else if (string[index] === '5') {
      codificar += 'u';
    } else {
      codificar += string[index];
    }
  }
  return codificar;
}

// Desafio 10
function techList(array, nome) {
  array.sort();
  let tecnologia = [];
  if (array.length == []) {
    tecnologia = 'Vazio!';
  } else {
    for (let index = 0; index < array.length; index += 1) {
      tecnologia.push({
        tech: array[index],
        name: nome,
      });
    }
  }
  return tecnologia;
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
