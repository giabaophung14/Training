var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];

var arrayLength = array.length;

function checkNumber() {
    for (var i = 0; i < arrayLength; i++) {
        
        if (array[i] < 0) {

            break;

        }

    }

    for(var j = 0; j < arrayLength; j++){

        if(array[j] = array[i]){
            
            console.log(array[j])

        }

    }

}

checkNumber()

