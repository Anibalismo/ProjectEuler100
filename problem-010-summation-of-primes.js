function primeSummation(n) {
  return isMorePrimeEficient2(n).reduce((a,b)=>a+b);
}

function isMorePrimeEficient2(n){
  let arr = [...Array(n).keys()]
  arr[1]=0;

  for(let isPri = 2; isPri<n ; isPri++){
    if(arr[isPri] !== 0)
        for(let i = isPri*2 ; i < n ; i= i+isPri)
        arr[i]=0;

    } 

  return arr.filter(x=>x!==0)
}

//console.log(primeSummation(2000000)) //should return 142913828922.