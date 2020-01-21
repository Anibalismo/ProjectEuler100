console.log(nthPrime(10001));

function isPrime(n) {
  for(let i=2; i <= Math.sqrt(n) ; i++)
    if(n%i===0)
      return false;
  return true;
}

function nthPrime(n) {
  // Good luck!
  let nthPrime = 0 , i=0;
  for(let i=0; i<=n ; ){
    nthPrime++

    if(isPrime(nthPrime)){
      i++
    }
  }
  return nthPrime;
}

