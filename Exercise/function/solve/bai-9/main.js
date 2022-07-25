function interest(x, y, z) {

    var result = 0;

    if (x > 0 && z <= 12) {

        result = x * ((y / 100) / 12) * z;
        
    }
    
    return result;

}

document.getElementById("interest").innerHTML = interest(500000, 5, 6);