function specialPythagoreanTriplet(n) {
 let sumOfabc = n;
 let a=0, b=0,c=0 ;

  for(a=0; a < n/2 ; a++)
    for(b=0; b < n/2;b++)
      for(c=0; c < n/2;c++){
        if(a+b+c === n && a*a+b*b === c*c){
          console.log('a:'+a+' b:'+b+'c:'+c)
          return a*b*c ;
        }
      }
  return 'no encontrado'
}

console.log( specialPythagoreanTriplet(1000) );
