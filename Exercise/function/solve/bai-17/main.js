function average(x){

    var sum = 0;

    var result = 0;

    var arrayLength = x.length;

    for(var i = 0; i < arrayLength; i++){

        sum = sum + x[i];

    }

    result = sum / arrayLength;

    return result;
}

document.getElementById("average").innerHTML = average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])