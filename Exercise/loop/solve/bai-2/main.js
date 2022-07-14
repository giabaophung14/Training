var  test = "hello";
function tong(x,y){
    





    if (isNaN(x) == true || isNaN(y) == true) {
      return false;
    }


    if ( x < y) {
      return false;
    }
    var sum = 0;
    for(var i = x; i >= y; i--) {
      sum = sum + i;
    }

    if (y == 0){
        return false;
    } else if (sum == 1) {
        return true;
    }

    return sum;

  }
  tong(100,1);
  
  
  document.getElementById("total").innerHTML = tong(100, 1);
