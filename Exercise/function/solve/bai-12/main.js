function number(x){

    var y = 0;

    for(var i = 0; i <= x; i++){

        if(i % 1 == 0 && i == x){

            y = i + 1;

        }

    }

    return y;

}
document.getElementById("number").innerHTML = number(5);