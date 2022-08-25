//HÀM BUILT-IN
//+ alert('Xin chao') hiện lên hộp thoại pop up
//+ confirm('DO YOU LOVE ME') 
//+ prompt('Nhap tuoi cua ban ') hiện lên hộp thoại ghi thông tin 
setTimeout(function () {
  //  alert('Thong bao')
}, 9000); // đơn vị mili giây , khối lệnh sẽ được thực thi sau số mili giây đa khai báo 

setInterval(function () {
// khối lệnh 
},1000);
var fullName  = 'Trinh Thanh Nam';
//alert(fullName)
console.log(typeof fullName) // hiện ra bảng console


//function
var myFunction = function (){
  alert('Hi . xin chao')
}
myFunction(); // gọi hàm 

console.log(typeof myFunction)

//object type
var myObject = {
    name : ' Thanh Nam',
    age : 19,
    address : 'Dong Nai',
    myFunction : function (){

    }
};
console.log(myObject)

var myArray = [ 
    'PHP',
    'C#',
    'C++',
    'PYTHON',
];
console.log(typeof myArray)

console.log(Boolean (document.all)) //  false\

var result = 'A' && 'B' && 'C' && 'D'
console.log(result) // D

var result = 'A' && 'B' && NaN && 'D'
console.log(result) // NaN

var result = 'A' || 'B' || 'C' || 'D'
console.log(result) // A

var result = null || 'B' || 'C' || 'D'
console.log(result) // B

var result = 'A' || 'B' || undefined || 'D'
console.log(result) // A


// Tạo Hàm 
function showDialog () { // a-z A-Z 0-9 _ $
console.log ("Hi ")
};
showDialog(); // gọi hàm 


// Tham số hàm 
function writeLog(message){
  console.log(message)
}
writeLog(['php' ,'java']);


function writeLog_1(){
  console.log(arguments)
}
writeLog_1('Log1','Log2','Log3');


function writeLog_2(){
  for(var param of arguments){
      console.log(param)
 }
}
writeLog_2('Log1','Log2','Log 3');



function writeLog_3(){
  var myString= '' ;
  for(var param of arguments){
      myString += `${param} - `
 }
  console.log(myString)
}
writeLog_3('Log1','Log2','Log3');


//RETURN in function
function sum(a,b){
     return a + b; 
}
var result = sum(2,8);
console.log(result)



//hàm trong hàm 
function show(){
  function show2(){
    console.log('Message');
  }
   show2();
}
show();

// Khai báo hàm 
function showMess(){
  console.log("Hello");
}
// Biểu thức hàm
var  get = function(weight , high){
  return weight * high;
}

showMess();
console.log(get(3,4));


//STRING VÀ CÁCHLAFM VIỆC VỚI STRING
var firstName = 'Nam';
var lastName = 'Trinh';
console.log(`Toi la : ${firstName} ${lastName}`);

var myString = 'Hoc JS tai F8!'
//length
console.log(myString.length);
//Find index // TIM VI TRI CHUOI TRONG CHUOI 
console.log(myString.indexOf('JS', 'tham so' ));
//CUT STRING
console.log(myString.slice(4,6));
console.log(myString.slice(-3 , -1));

//REPLACE : THAY THE
console.log(myString.replace('JS' , 'Javascript'))
var myString_2 = "Hoc JS tai JS JS";
console.log(myString_2.replace(/JS/g , 'Javascript')); // biểu thức chính quy

//Convert to uper case : chuyen thanh chu hoa
console.log(myString.toUpperCase());
//Convert to lower case : chuyen thanh chu thuong
console.log(myString.toLowerCase());

//Trim : cắt khoảng thừa 
console.log(myString.trim() . length)

//Split : cắt 1 chuỗi thành một array, tìm được điểm chung để cắt 
var language = "JS, PHP, C#";
console.log(language.split(', '))
var language_2 = 'JAVASCRIPT'
console.log(language_2.split(''))

//Get a character by index : lấy kí tự bởi 1 index cho trước
const String = 'Thanh Nam'
console.log(String.charAt(2))



// CÁC PHƯƠNG THỨC VỀ HÀM (P2)
//forEach() : duyệt qua từng phần tử của mảng 
    var courses = [
      {
        id   : 1,
        name :'javascript',
        coin :250,
      },
      {
        id  : 2,
        name: 'HTML , CSS',
        coin: 250,
      },
      {
        id  : 3,
        name :'PHP',
        coin :250,
      },
      {
        id : 4,
        name :'ReactJS',
        coin :250,
      },
      {
        id : 5,
        name :'PYTHON',
        coin :250,
      },
    ];

  courses.forEach(function (course, index){
        console.log(index , course)
  });


//every() : lặp lại tất cả , nếu đúng với đk thì true ngược lại false
//some() : 1 vài , nếu 1 vài dk đúng vs điều kiện -> true
//find():tìm kiếm chỉ đưa ra 1 phần tử đúng , ko kiểm tra cac phần còn lại
//filter(); : tìm kiếm đưa các tất cả các phần tử gióng nhau có trong mảng 