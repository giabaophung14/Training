
function reverse(str){

    var reverseString = "";

    for(var i = str.length - 1; i >= 0; i--){

        reverseString += str[i];
    }

    return reverseString;
}

document.getElementById("reverse").innerHTML = reverse ('456789')