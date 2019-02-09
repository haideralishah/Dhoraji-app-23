/*

Functions

*/



// function cookFood(){
//     console.log('bring me a cup of tea with some snacks.');
// }

// cookFood();






// function greetUser(){
//     var userName = prompt('what is your name?');
//     document.write('Hello ' + userName + '<br />');
// }

// greetUser();
// greetUser();
// greetUser();
// greetUser();





// function cookFood(item) {
//     console.log('bring me a meal with ' + item);
// }

// cookFood('egg');
// cookFood('POTATO');
// cookFood('Allo k Parathe');






// function sum(b, a) {
//     console.log(a + b);
// }


// sum(2, 5); // 7
// sum(2, 2); // 4
// sum(7, 5); // 12




// function greetUser(firstName, lastName){
//     console.log('Welcome ' + firstName + ' ' + lastName);
// }

// greetUser('Haider', 'Ali');
// greetUser('Abdullah', 'Shah');












// function calculator(num1, num2, operator) {
//     if (operator === '+') {
//         console.log(num1 + num2);
//     }
// }








// function makeSquare(num) {
//     console.log(num * num);
// }

// makeSquare(2);
// makeSquare(3);
// makeSquare(4);











// function printRange(startingNum, endNumber) {
//     for (var i = startingNum; i <= endNumber; i++) {
//         console.log(i);
//     }
// }

// printRange(13, 400);

// printRange(131, 194);




// function myFunc() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     console.log(sum);
// }
// myFunc(2, 4, 5, 6, 7, 8);

// myFunc(1,2,3,4,5,6);









// function sum(num1, num2) {
//     var total = num1 + num2;
//     return total;
// }

// var tax = 500;
// var bill = 5000;

// var getTotal = sum(tax, bill); // 5500

// console.log(getTotal);
















// function makeSquare(num) {
//     return num * num;
// }

// function hypSquare(base, per) {
//     var baseSqr = makeSquare(base);
//     var perSqr = makeSquare(per);

//     return baseSqr + perSqr;
// }

// var triangleHyp = hypSquare(2, 4);

// console.log(triangleHyp);


























// function tellBiggestNumber() {
//     var biggestNumber = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         if (biggestNumber < arguments[i]) {
//             biggestNumber = arguments[i];
//         }
//     }
//     console.log(biggestNumber);
// }

// tellBiggestNumber(5, 6, 7, 1, 3, 9, 11, 11);














































// var userName = 'Abdullah';
// function updateUser() {
//     var userName = 'Shah';
//     console.log(userName);
//     return userName;
// }
// console.log(userName); // Global scope Abdullah
// console.log(updateUser()); // Ali , local scope, Shah
// console.log(userName); // Global scope Abdullah

















// var userName = 'Abdullah';
// function updateUser() {
//     console.log(userName);
//     var userName = 'Shah';
//     console.log(userName);
//     return userName;
// }

// console.log(updateUser()); // undefined (local) , Shah (local), Shah (local)
// console.log(userName); // Abdullah (Global)
// console.log(userName);  //Abdullah (Global)





// console.log(abc);

// greet()

// // var abc = 'world'
// function greet(){
//     console.log('hello');
// }











// function printParam(a){
//     console.log(a);
// }







function countChr(word, chr) {
    var chrCounted = 0;

    for(var i =0; i< word.length; i++){
        if(word[i].toLowerCase() === chr.toLowerCase()){
            chrCounted++; 
        }
    }

    console.log(chrCounted);


}


countChr('book', 'o');
countChr('Haider Ali', 'a');
countChr('table', 'y');