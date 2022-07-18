var array = [5, -2 , 87 , 8 , -0.1 , 0.1 , 9 , 25, -2.5, 10 , 8 , -2 , 3 , - 3 , 2.9 , 8.9 , 108 , 40.5 , -90];

function myArray(num) {
  for (var i = 1; num < i; i--) {
    if (num % i == 0) {
      return false;
    }
  }
  return num < 0;
}

console.log(array.filter(myArray));