function menu(){

    var inputAlert = prompt('Chọn một tùy chọn');

    switch(inputAlert){

        case 'Profile' :

            alert("Tùy chọn Profile");

            break;

        case 'Update':

            alert("Tùy chọn Update");

            break;

        case 'Logout':

            alert('Tùy chọn Logout');

            break;

    }

    var numberInput = prompt('Nhập số nguyên bât kì');

    var numberInputs = prompt ('Nhập số nguyên bất kì');
    
   return (inputAlert + " " + numberInput + " " + numberInputs);

}

document.getElementById("menu").innerHTML = menu();

