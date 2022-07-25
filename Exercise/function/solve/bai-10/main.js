function stringLength(x) {

    var count = 0;   

    var arrayString = x.split("");

    for(var i = 0; i < arrayString.length; i++){

        count ++;
        
    }

    return count;

}

document.getElementById("stringLength").innerHTML = stringLength("Hello World");