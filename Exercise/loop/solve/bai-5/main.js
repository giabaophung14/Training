var myArray = [5, -2 , 87 , 8 , -0.1 , 0.1 , 9 , 25, -2.5, 10 , 8 , -2 , 3 , - 3 , 2.9 , 8.9 , 108 , 40.5 , -90];
// Viet gi day Bao
// Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [-5, 5] , 
// Tuc la trong array ban dau tim tat cac so trong doan [-5.5]
// Nhin cau myArray của em sau khi a chay day
// [-5, -4.9, -4.800000000000001, -4.700000000000001, -4.600000000000001, -4.500000000000002, -4.400000000000002, -4.3000000000000025, -4.200000000000003, -4.100000000000003, -4.0000000000000036, -3.9000000000000035, -3.8000000000000034, -3.7000000000000033, -3.600000000000003, -3.500000000000003, -3.400000000000003, -3.300000000000003, -3.200000000000003, -3.1000000000000028, -3.0000000000000027, -2.9000000000000026, -2.8000000000000025, -2.7000000000000024, -2.6000000000000023, -2.500000000000002, -2.400000000000002, -2.300000000000002, -2.200000000000002, -2.100000000000002, -2.0000000000000018, -1.9000000000000017, -1.8000000000000016, -1.7000000000000015, -1.6000000000000014, -1.5000000000000013, -1.4000000000000012, -1.3000000000000012, -1.200000000000001, -1.100000000000001, -1.0000000000000009, -0.9000000000000009, -0.8000000000000009, -0.700000000000001, -0.600000000000001, -0.500000000000001, -0.400000000000001, -0.30000000000000104, -0.20000000000000104, -0.10000000000000103, -1.0269562977782698e-15, 0.09999999999999898, 0.19999999999999898, 0.299999999999999, 0.399999999999999, 0.499999999999999, 0.599999999999999, 0.699999999999999, 0.7999999999999989, 0.8999999999999989, 0.9999999999999989, 1.099999999999999, 1.199999999999999, 1.2999999999999992, 1.3999999999999992, 1.4999999999999993, 1.5999999999999994, 1.6999999999999995, 1.7999999999999996, 1.8999999999999997, 1.9999999999999998, 2.0999999999999996, 2.1999999999999997, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8000000000000003, 2.9000000000000004, 3.0000000000000004, 3.1000000000000005, 3.2000000000000006, 3.3000000000000007, 3.400000000000001, 3.500000000000001, 3.600000000000001, 3.700000000000001, 3.800000000000001, 3.9000000000000012, 4.000000000000001, 4.1000000000000005, 4.2, 4.3, 4.3999999999999995, 4.499999999999999, 4.599999999999999, 4.699999999999998, 4.799999999999998, 4.899999999999998, …]
// Hoc lai so thuc so nguyen giup anh
// Neu theo em hieu thi 4.01 , 4.011, 4.012 sao ko in ra luon

var arrayLength = myArray.length;

for (var i = 0; i <= arrayLength; i++) {

    if(myArray[i] >= -5 && myArray[i] <= 5){
        console.log(myArray[i])
    }
    
}








