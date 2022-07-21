var array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// hinh nhu sai de 
// vd Tìm bội số của 2
//  Áp dụng kiến thức vừa học, ta lấy 2 nhân lần lượt với n = 0, 1, 2, 3, 4, 5,...
//  Vậy bội số của 2 là 0, 2, 4, 6, 8, 10, ...
// // Nhu v đc vô hạn , nên lấy từ 1 -> 15 thôi
function multipleNumber(x){

    var valid_array = [];

    var arrayLength = array.length;

    if(x % 1 !=0){
        return false;
    }

    for(var i = 0; i <= arrayLength; i++){
        if(array[i] % x == 0){
            console.log(array[i])
            valid_array.push(array[i])
        }
    }

    return valid_array;

}

document.getElementById("multipleNumber").innerHTML = multipleNumber(3);