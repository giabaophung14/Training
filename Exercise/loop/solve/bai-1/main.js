// Bien khong dung 
var test = "hello";
// Ten function khong tuong minh
// Tong(x,y) có y nghia tinh tong 2 so x,y khong phai tinh tong cua 1 range x -> y
// Nen dat bang tieng anh
function tong(x, y) {
  if (isNaN(x) == true || isNaN(y) == true) {
    return false;
  }

  // if(isNaN != true || isNaN != null){
  //     return false;
  // }

  if (x > y) {
    return false;
  }
  var sum = 0;
  for (var i = x; i <= y; i++) {
    sum = sum + i;
  }

  if (x == 0) {
    return false;
  } else if (sum == 1) {
    // sum = 1 mac dinh in ra true mà không in ra 1 ????
    return true;
  }

  return sum;
}
// Tai sao goi tong(1,100) 2 lần ????
// Neu tong() tra ve false thì khong in ra HTML
tong(1, 100);
document.getElementById("total").innerHTML = tong(1, 100);

// Cac test case :
// tong(0,1) , tong(0,2) , tong(0,3) .... -> false ????
// tong(true,2) -> 3 ????
// tong(null,null) -> 0
// tong(2,2) -> 2 OK , tong(1,1) -> true ?????
// ..................
