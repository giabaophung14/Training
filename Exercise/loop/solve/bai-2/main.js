function sumArray(x, y) {

    if (typeof x != "number" || typeof y != "number" || isNaN(x) || isNaN(y)) {
        return false;
    }

    var sum = 0;
    if (x == y) {
        return sum = sum + y;
    } else if (x > y) {
        for (var i = x; i >= y; i--) {
            sum = sum + i;
        }
    } else if (x < y) {
        return false
    }

    return sum;

}

document.getElementById("total").innerHTML = sumArray(true, true);
