
function reverse(str){

    var reverseString = "";

    for(var i = str.length - 1; i >= 0; i--){
        console.log(i)
        reverseString += str[i];
    }

    console.log(reverseString);

    return reverseString;
}

document.getElementById("reverse").innerHTML = reverse ('456')