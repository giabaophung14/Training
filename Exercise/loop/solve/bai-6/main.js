var myArray = [5, -2 , 87 , 8 , -0.1 , 0.1 , 9 , 25, -2.5, 10 , 8 , -2 , 3 , - 3 , 2.9 , 8.9 , 108 , 40.5 , -90];

var arrayLength = myArray.length;
// nhu bai 5 xem lai
for (var i = 0; i <= arrayLength; i++) {

    if (myArray[i] % 2 == 0 && myArray[i] <= 5 && myArray[i] >= -5) {

        console.log(myArray[i])

    }

}


