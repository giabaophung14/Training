var array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function multipleNumber(x){

    var arrayLength = array.length;

    if(x % 1 !=0){
        return false;
    }

    for(var i = 0; i <= arrayLength; i++){
        if(array[i] % x == 0){
            console.log(array[i])
        }

    }

}
multipleNumber(3);