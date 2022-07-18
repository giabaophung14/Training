function myArray(value) {
   return value < 0
 }
 
 var filtered = [5, -2 , 87 , 8 , -0.1 , 0.1 , 9 , 25, -2.5, 10 , 8 , -2 , 3 , - 3 , 2.9 , 8.9 , 108 , 40.5 , -90].filter(myArray);

console.log(filtered)