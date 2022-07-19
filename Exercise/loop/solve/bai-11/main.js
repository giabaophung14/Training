var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];

function maxArray(){
    
    var maxNumber = [];

    var arrayLength = array.length;

    for(var i = 0; i < arraylength; i++){
        
        var max = array[i][0];

        for(var j = 0; i < array[i].length; i++){

            if( array[i][j] >  max){

                array[i][j] = max;
                
            }

        }

        maxNumber[i] = max;

    }

    return maxNumber;

}
