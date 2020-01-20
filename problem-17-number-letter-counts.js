function numberLetterCounts(limit) {
  // Good luck!
  return secuenciador(limit).length;
}

// 1 un generador de núemros en palabras.
//  a. unidades
//  b. decenas
//  c. centenas
// 2 generar la secuencia de palabras
// 3 contar las letras

let wUnidades = {
  0: '',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eigth',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

let wDecenas = {
  0: '',
  1: 'teen',
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

function toWords(num){
  let unidades = num % 10;
  let decenas = ((num - unidades) % 100)/10;
  let centenas = ((num - decenas*10 - unidades) % 1000) / 100;

  if(num === 1000)
    return 'onethousand' ;
  if(decenas ===0 && unidades === 0 )
    return wUnidades[centenas] + 'hundred';

  if(decenas*10 + unidades < 20 )
    return (centenas? (wUnidades[centenas] + 'hundredand') : '') + wUnidades[10*decenas + unidades]

  return (centenas? (wUnidades[centenas] + 'hundredand') : '') + wDecenas[decenas] + (unidades? wUnidades[unidades] : '') ; 

}

function secuenciador(num){
  let frase = '';
  for(let i=1; i<=num; i++){
    frase += toWords(i)// + '\n'
  }
  return frase;
}

console.log ( secuenciador(1000).length );