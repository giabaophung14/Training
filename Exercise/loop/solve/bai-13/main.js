var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];

function squareNumber() {

    var arrayLength = array.length;

    for (var i = 0; i <= arrayLength; i++) {

        if (Math.sqrt(array[i]) % 1 == 0) {

            // Log ra vi tri , not gia tri
            
            console.log(array[i])

            console.log(i)

        }

    }

}

squareNumber()