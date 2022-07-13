var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() +1;
var day = date.getDay();
var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();

console.log(`${day}/${month}/${year}`);
console.log(`${hour}:${minutes}:${seconds}`);