/*
string
number
boolean
undefined
array is an special type of object



*/



// var studentName = 'Haider Ali';
// var rollNumber = '2643';
// var phoneNumber = '03413542800';

// var student = {
//     studentName: 'Haider Ali',
//     rollNumber: '2643',
//     phoneNumber: '03413542800',
//     test : ['HTML 5', 'CSS 3', 'JavaScript']
// }
// console.log(student.test);





// var cityName = 'Karachi';
// var title = 'city of lights';
// var popularFood = ['biryani', 'dhoraji Gola Ganda'];
// var places = ['seaview', 'tomb of Quaid']






// var car = {
//     modal: '2005',
//     color: 'red',
//     brand: 'Civic',
//     hybrid: true,
//     mode: 'automatic',
//     application:  function(){
//         document.write('Pau pau kr k chalti h ')
//     }
// }
// car.application();
















// var basicHostingPlan = {
//     monthly: 3.99,
//     diskSpace: '100 GB',
//     dataTransfer: '1000 GB / Mo',
//     sitePages: 10
// }
// console.log(basicHostingPlan.diskSpace);



// basicHostingPlan.diskSpace = '90 GB'

// console.log(basicHostingPlan.diskSpace);



















// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 2],
//     calcAnnual: function (percentIfDisc) {
//         var bestPrice = plan1.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < plan1.discountMonths.length; i++) {
//             if (plan1.discountMonths[i] === thisMo) {
//                 bestPrice = plan1.price * percentIfDisc;   // .85
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };

// var subcPrice = plan1.calcAnnual(.75);
// console.log(subcPrice);







// function sum(a, b) {
//     var total = a + b;
//     return total;
// }



// var abc = sum(2, 5);
// console.log(abc);














// var student;

// var student = {};

// student.name = 'haider';
// console.log(student)


















// var student ={
//     name: 'haider',
//     rollNo: '2643',
//     class: 'Mobile and Web App Development',
//     grade: 'A'
// }


// var rollNumberExist = "rollNo" in student;

// // console.log(rollNumberExist);


// delete student.grade

// console.log(student);





























// var student1 ={
//     name: 'haider',
//     rollNo: '2643',
//     class: 'Mobile and Web App Development',
//     grade: 'A'
// }

// var student2 ={
//     name: 'ali',
//     rollNo: '2644',
//     class: 'Mobile and Web App Development',
//     grade: 'A'
// }

// var arr = [{name: 'akbar'},{name:'akram'}];

// arr.push(student1)
// arr.push(student2)

// console.log(arr);
























// var arr =[];

// function getValues(){
//     var studentName = document.getElementById('stName').value;
//     var studentRollNumber = document.getElementById('stRollNo').value;
//     var studentClass = document.getElementById('stClass').value;

//     var student = {
//         name: studentName,
//         rollNumber: studentRollNumber,
//         stClass: studentClass
//     }

//     arr.push(student);

//     console.log(arr);
// }


























// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [6, 2],
//     calcAnnual: function (percentIfDisc) {
//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === thisMo) {
//                 bestPrice = this.price * percentIfDisc;   // .85
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };

// var subcPrice = plan1.calcAnnual(.75);
// console.log(subcPrice);

























// function Students(name, rollNo, stClass) {
//     this.studentName = name;
//     this.rollNumber = rollNo;
//     this.studentClass = stClass;
// }

// var student1 = new Students('haider', '2643', 'Mobile and Web App Development');
// var student2 = new Students('ali', '2644', 'Mobile and Web App Development');

// console.log(student1);
// console.log(student2);

























// function PricePlan(name, price, sitePages, discountMonths) {
//     this.name = name;
//     this.price = price;
//     this.sitePages = sitePages;
//     this.discountMonths = discountMonths;
//     this.calcAnnual = function (discountRate) {
//         var currentDate = new Date();
//         var currentMonth = currentDate.getMonth();
//         var bestPrice = this.price * 12;
//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] == currentMonth) {

//                 bestPrice = bestPrice * discountRate; // .80
//                 break;

//             }
//         }
//         return bestPrice;
//     }
// } 
// var basicPlan = new PricePlan('basic', 4, '10', [3, 6]);
// var specialPlan = new PricePlan('special', 5, '20', [2, 7]);
// var bestPriceBasic = basicPlan.calcAnnual(.80)
// var bestPriceSpecial = specialPlan.calcAnnual(.80);
// console.log(bestPriceBasic, bestPriceSpecial);











































// function Student(name, rollNo, className){
//     this.name = name;
//     this.rollNo = rollNo;
//     this.className = className;
// }

// var allStudents = [];

// function getValues(){
//     var stName = document.getElementById().value;
//     var stRollNo = document.getElementById().value;
//     var stClass = document.getElementById().value;


//     var studentObject =  new Student(stName, stRollNo, stClass);

//     allStudents.push(studentObject);

//     document.getElementById().value = '';
//     document.getElementById().value = '';
//     document.getElementById().value = '';
// }














// var counter = 0;

// var timer = setInterval(function(){
//     counter++;
//     console.log(counter);
// },1000);

// setTimeout(function(){
//     console.log('Welcome To Our Web');
//     clearInterval(timer);
// },5000);














// var miliSecond = 0;
// var second = 0;
// var minute = 0;
// var intervalTime;
// var isTimerStarted = false;

// var currentTime = minute + ' : ' + second + ' : ' + miliSecond;
// // 0 : 0 : 0

// var stopwatch = document.getElementById('stopwatch');
// stopwatch.innerHTML = currentTime;


// function startTimer() {
//     if(isTimerStarted !== true){
//         intervalTime = setInterval(updateTime, 1);
//     }
// }

// function updateTime() {
//     isTimerStarted = true;

//     if (miliSecond < 9) {
//         miliSecond++;
//         currentTime = minute + ' : ' + second + ' : ' + miliSecond;
//         stopwatch.innerHTML = currentTime;
//     }
//     else if (second < 59) {
//         miliSecond = 0;
//         second++;
//         currentTime = minute + ' : ' + second + ' : ' + miliSecond;
//         stopwatch.innerHTML = currentTime;
//     }
//     else {
//         miliSecond = 0;
//         second = 0;
//         minute++;
//         currentTime = minute + ' : ' + second + ' : ' + miliSecond;
//         stopwatch.innerHTML = currentTime;
//     }
// }

// function stopTimer() {
//     isTimerStarted = false;
//     clearInterval(intervalTime);
// }



































































// function Car(carName, modal, color) {
//     this.carName = carName;
//     this.modal = modal;
//     this.color = color;
// }

// Car.prototype.steering = true;

// var corolla = new Car('Corolla', '2018', 'black');
// var corolla = new Car('cultus', '2018', 'black');

// console.log(corolla);






























// 3 form fields


// 1. student Name
// 2. roll number
// 3. fees paid (number)


// 1 button

// make object of above 3 valus using a constructor function.

// push these objects in an empty Array













// var allStudents = [];


// function Students(name, rollnumber, feespaid) {
//     this.name = name;
//     this.rollNumber = rollnumber;
//     this.feespaid = feespaid;
// }
// Students.prototype.institue = 'Dhoraji Association';

// Students.prototype.remainingFee = function (monthlyFee) {
//     var annualFee = monthlyFee * 12;
//     var remainingFee = annualFee -this.feespaid  ;
//     console.log('Remaining Fee: ', remainingFee);
// }

// function addStudentsData() {
//     var stName = document.getElementById('stname').value;
//     var stRoll = document.getElementById('roll').value;
//     var stFees = document.getElementById('feespaid').value;

//     var newStudent = new Students(stName, stRoll, stFees);

//     newStudent.remainingFee(5000);


//     allStudents.push(newStudent);

//     console.log(allStudents);
// }



// for (var i = 0; i < allStudents.length; i++) {
//     var eachStudent = allStudents[i];
// }















// function Students(name, rollnumber, feespaid) {
//     this.name = name;
//     this.rollNumber = rollnumber;
//     this.feespaid = feespaid;
// }
// Students.prototype.institue = 'Dhoraji Association';


// function addStudentsData() {
//     var stName = document.getElementById('stname').value;
//     var stRoll = document.getElementById('roll').value;
//     var stFees = document.getElementById('feespaid').value;

//     var newStudent = new Students(stName, stRoll, stFees);
//     newStudent.institue = 'Saylani';
//     // allStudents.push(newStudent);

//     console.log(newStudent.institue);
// }

















// function Students(name, rollnumber, feespaid) {
//     this.name = name;
//     this.rollNumber = rollnumber;
//     this.feespaid = feespaid;
// }
// Students.prototype.institue = 'Dhoraji Association';

// var newStudent = new Students('haider', '2643', 5000);


// var isInstitue = 'institue' in newStudent;

// var isOwnProp = newStudent.hasOwnProperty('institue');

// console.log(isOwnProp,isInstitue);






// var car = {
//     name: 'corolla',
//     modal: '2016',
//     color: 'black'
// }


// var isModalAvailable = 'modal' in car;

// console.log(isModalAvailable);

















// var fruits = ['apple', 'banana', 'orange'];

// var car = {
//     name: 'corolla',
//     modal: '2016',
//     color: 'black'
// }


// for(var key in car){
    
//     console.log(car[key]);

// }



// console.log(car['modal'])









// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }


// var c = 'a';

// console.log(obj[c]);






// var obj = {};

// var a = "c";

// obj[a] = 1;
// //obj.a =1;

// console.log(obj);

































// http://www.mybeautifulsite.com/products/page33.html#humidifier

// http --- protocol

// www.mybeautifulsite.com --- domain / host


// http://www.mybeautifulsite.com --- href


// /products/page33.html --- path


// #humidifier --- hash


function abc(a,b){
    console.log(a);
}


abc()







