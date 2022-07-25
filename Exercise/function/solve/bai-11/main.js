function cubeNumber(x){

    var result = 0;

    if(x %1 == 0 && x > 0){

        result = Math.pow(x, 3);

    }

    return result;

}

document.getElementById("cubeNumber").innerHTML = cubeNumber(2);