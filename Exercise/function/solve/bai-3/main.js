function reverse(str){

    var reverseString = [];

    for(var i = str.length - 1; i >= 0; i--){

        reverseString.push(str[i]);
    }

    return reverseString;
}

document.getElementById("reverse").innerHTML = reverse ([1,2,3,4,5,6])