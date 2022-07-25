function alertChoice(){

    var optionPrompt = prompt("Nhập lựa chọn");

    switch(optionPrompt){
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

}

alertChoice()