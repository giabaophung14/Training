function factorial(num) {

    var total = 1;
    
    for (i = 0; i < num; i++){

        total = total * (num - i);

    }
    
    return total;

  }

 document.getElementById("factorial").innerHTML = factorial(5);