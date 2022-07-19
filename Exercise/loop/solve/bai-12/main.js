var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];

function checkPrime(n) {
    if( Number(n) === n && n % 1 !== 0){
        return false;
    }

    if(n < 2){
        return false;
    }

    for(i = 2; i < n/2; i ++){

        if(n % i == 0){
            return false;
        }
        
    }

    return true;
}

function primeArray(){

    var arrayLength = array.length;

    for(var i = 0; i < arrayLength; i ++){
        if(checkPrime(array[i])){
            console.log(array[i])
        }
    }
}

primeArray();
