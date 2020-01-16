// estoy empezando este código otra vez porque la primera vez lo perdí D'x
// dado un N (díagamos 4), hallar 9999 * 9999 = 100.000.000
// empezar a buscar los palindromos menores: 99.999.999 99.989.999 99.979.999...
// buscar los divisores de ese número 
// mi numero es producto de sus últimos dos divisores de longitud?

console.log(largestPalindromeProduct(3));

function largestPalindromeProduct(n) {
  // Good luck!
  let maxPalindrome = Math.pow(10,2*n)-1; 

  for(let i=maxPalindrome ; i>0 ; i--){
    if(isPalindrome(i)){
      let multiplos = filterElementsOfLenghtN(findDivisorsOf(i), n).slice(-2);
      if(multiplos[0]*multiplos[1]===i){
        return(i)
      }
    }
  }
  return true;
}

function isPalindrome(n)
{
  let arr = n.toString();

  for(let i=0; i<= Math.ceil(arr.length/2)-1 ; i++)
    if(arr[i] !== arr.slice(-i-1)[0])
      return false;
  return true;
}

function findDivisorsOf(n){
  let divisores = [];

  for(let i=0; i< Math.ceil(n/2)+1 ; i++ )
    if(n%i===0)
      divisores.push(i)

  return divisores;
}

function filterElementsOfLenghtN(arr, n){
  return arr.filter(x => x.toString().length === n)
}


