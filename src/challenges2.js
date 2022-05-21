// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } 
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    }
    var repitido =[];
    for (let index = 0; index < array.length; index += 1) {
      repitido = array[index];
      var contador = 0;
      for (let index = 0; index < array.length; index += 1) {
        if (repitido === array[index]) {
        contador += 1;
        }
      }
            if (contador >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      
    }
}
    for (index = 0; index < array.length; index +=1) {
      return '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
    }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB ) {
    var medidas = true;
  }
  let moduloA = Math.abs(lineB - lineC);
  let moduloB = Math.abs(lineA - lineC);
  let moduloC = Math.abs(lineA - lineB);
  if (lineA > moduloA && lineB > moduloB && lineC > moduloC ) {
    var modulo = true;
  }

  if (modulo === true && medidas === true) {
    return true;
  } return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
