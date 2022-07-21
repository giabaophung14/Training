var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];

var arrayLength = array.length;
// sao log ra 19 lần -2 ???
// Kết quả phải là 11 (vị trí 11 có giá trị -2  bằng với số âm đầu tiên là -2 ở vị trí 1 )

function checkNumber() {
    for (var i = 0; i < arrayLength; i++) {
        
        if (array[i] < 0) {

            break;

        }

    }

    for(var j = 0; j < arrayLength; j++){

        if(array[j] = array[i]){
            
            console.log(array[j])

        }

    }

}

checkNumber()


//

var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];


function checkNumber()
{
    for (var i = 0; i < array.length; i++) {
      if (array[i] < 0){
        var value = array[i];
        var index = i;
        break;
      }
    }
    for (var j = index; j < array.length; j++){
      if (value == array[j]){
        var result = j;
      }
    }
    return result
}

console.log(checkNumber())

