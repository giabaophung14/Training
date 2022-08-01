function numberPrompt(){

    var numberInput = prompt('Nhập số nguyên bất kì');

    var numberInput1 = prompt('Nhập số nguyên bất kì');

    var numberInput2 = prompt('Nhập số nguyên bất kì');

    console.log(numberInput);

    console.log(numberInput1);

    console.log(numberInput2);

    var maxNumber = numberInput;

    var minNumber = numberInput;

    if (maxNumber <numberInput1){

        maxNumber = numberInput1;

        if (maxNumber < numberInput2){  

            maxNumber = numberInput2;

        }

    }

    if (minNumber > numberInput1){

        minNumber = numberInput1;

        if (minNumber > numberInput2){

            minNumber = numberInput2;
            
        }

    }

   return ("Số lớn nhất là" + ": " + maxNumber + "<br>" + "Số nhỏ nhất là" + ": " + minNumber);

}

document.getElementById("numberPrompt").innerHTML = numberPrompt();