var array = ['Hello World'];

function countChar() {

    var count = 0;

    for (var i = 0; i < array.length; ++i) {

        array.slice(array[i]);

        console.log(array.slice[i])

    }

    return count;

}

document.getElementById("countChar").innerHTML = countChar();