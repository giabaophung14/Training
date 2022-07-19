var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];

function maxArray(){

    var maxNumber = 0; 

    var arrayLength = array.length;

     for(var i = 0; i < arrayLength; i++){

         if(array[i] > maxNumber){

             maxNumber = array[i];

         }
     }
     return maxNumber;
 }
 
 console.log(maxArray());