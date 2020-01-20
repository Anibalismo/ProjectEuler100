console.log( sumSquareDifference(10) );

function sumaDeCuadrados(nMax){
  let arr = [...Array(nMax+1).keys()];
  let suma = arr.map( x => x*x ).reduce( (a,b)=>a+b);
  return suma;
}

function cuadradoDeSumas(nMax){
  let arr = [...Array(nMax+1).keys()];
  let suma = Math.pow( arr.reduce( (a,b)=>a+b) , 2);
  return suma;
}

function sumSquareDifference(n) {
  return cuadradoDeSumas(n) - sumaDeCuadrados(n);
}

