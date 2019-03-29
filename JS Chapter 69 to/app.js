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
























var arr =[];

function getValues(){
    var studentName = document.getElementById('stName').value;
    var studentRollNumber = document.getElementById('stRollNo').value;
    var studentClass = document.getElementById('stClass').value;

    var student = {
        name: studentName,
        rollNumber: studentRollNumber,
        stClass: studentClass
    }

    arr.push(student);

    console.log(arr);
}













