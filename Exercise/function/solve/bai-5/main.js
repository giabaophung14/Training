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

document.getElementById("checkPrime").innerHTML = checkPrime(7)
