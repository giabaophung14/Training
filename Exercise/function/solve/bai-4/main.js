function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}

function reSolve(x){
   var result = x - 1/(factorial(3))*x*3 + 1/(factorial(5))*x*5 - 1/(factorial(7))*x*5 + 1/(factorial(9))*x*9
   return result

}

document.getElementById("factorial").innerHTML = reSolve(4);