function swapNumber(x, y){

    x = x + y;

    y = x - y;

    x = x - y;

    return ("x =" + " " + x + "<br>" + "y =" + " " + y)

}

document.getElementById("swapNumber").innerHTML = swapNumber(2, 5)