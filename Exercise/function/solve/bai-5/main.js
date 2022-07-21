function checkPrime(n) {
    if (Number(n) === n && n % 1 !== 0) {
        return false;
    }

    if (n < 2) {
        return false;
    }

    for (i = 2; i < n; i++) {

        if (n % i == 0) {
            return false;
        }

    }

    return true;
}

function primeArray(x) {

    var array = [];

    for (var i = 0; i < x.length; i++) {

        if (checkPrime(x[i])) {

            array.push(x[i])

        }
    }
    return array;
}

document.getElementById("checkPrime").innerHTML = primeArray([17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
