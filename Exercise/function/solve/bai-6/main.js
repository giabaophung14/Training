function fibonacci(num) {

    var n1 = 0; n2 = 1; term = 0;

    var result = "1";

    for (let i = 1; i < num; i++) {
        
        term = n1 + n2;

        n1 = n2;

        n2 = term;

        result += term;

    }

    return result.substring(0,num);
}

document.getElementById("fibonacci").innerHTML = fibonacci(15)