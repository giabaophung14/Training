var array = [5, -2, 87, 8, -0.1, 0.1, 9, 25, -2.5, 10, 8, -2, 3, - 3, 2.9, 8.9, 108, 40.5, -90];

function myArray(num) {
   // Muc dich doan nay la gi giai thich cho anh , khong co doan nay van chay dung
   for (var i = 1; num < i; i--) {}
   // Muc dich doan nay la gi giai thich cho anh , khong co doan nay van chay dung
   return num < 0;
}

console.log(array.filter(myArray));
// De bai 4/ Hãy liệt kê các số âm trong mảng 1 chiều các số thực ,  KQ ra [-0.1, -2.5]  => Phải ra [-2,-0.1,-2,-3...] ???? -2,-3 cũng là số thực mà
// Tap so thuc bao gom tap so nguyen
