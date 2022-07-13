var  test = "hello";
function tong(x,y){
    





    if (isNaN(x) == true || isNaN(y) == true) {
      return false;
    }

    // if(isNaN != true || isNaN != null){
    //     return false;
    // }

    if ( x > y) {
      return false;
    }
    var sum = 0;
    for(var i = x; i <= y; i++) {
      sum = sum + i;
    }

    if (x == 0){
        return false;
    } else if (sum == 1) {
        return true;
    }

    return sum;

  }
  tong(1,100);
  
  
  document.getElementById("total").innerHTML = tong(1, 100);
