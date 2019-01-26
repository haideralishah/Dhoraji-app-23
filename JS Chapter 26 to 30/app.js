/*
string
str.slice()
str.length
str.toUpperCase()
str.toLowerCase()
str.indexOf()
str.lastIndexOf()
str.replace()


array is a special type of object
arr.push()
arr.pop()
arr.shift()
arr.unshift()
arr.splice()
arr.slice()
arr.length
arr.indexOf()
arr.lastIndexOf()

number
Math.round()
Math.ceil()
Math.floor()
Math.random()
parseInt()
parseFloat()
Number()
number.toFixed()
number.toString()

*/







// var runRate = 3.219487259;
// var secTeamRR = 3.5678;
// runRate = Math.round(runRate);
// secTeamRR = Math.round(secTeamRR)
// console.log(runRate);
// console.log(secTeamRR);







// var discountPrice = 5.999; 
// var chargedPrice = 5.111;  



// discountPrice = Math.floor(discountPrice);
// chargedPrice = Math.ceil(chargedPrice);

// console.log(discountPrice);
// console.log(chargedPrice);

// console.log(Math.ceil(0.111111));
// console.log(Math.floor(0.999999));

















// var randomNumber = Math.random();


// randomNumber = randomNumber * 50;

// console.log(Math.ceil(randomNumber));











// var randomNumber = Math.random();
// randomNumber = randomNumber * 2;
// randomNumber = Math.ceil(randomNumber)

// var userChoice = +prompt('1 for Head, 2 for Tail.');;
// console.log(randomNumber);
// console.log(userChoice);
// if(userChoice === randomNumber){
//     document.write('You won the toss.');
// }
// else{
//     document.write('You lost the toss.');
// }


















// var randomNumber = Math.random();
// randomNumber = randomNumber * 2;
// randomNumber = Math.ceil(randomNumber)
// var userChoice = prompt('1 for Head, 2 for Tail.');;

// var userPick;
// if (userChoice === 'head') {
//     userPick = 1;
// }
// else {
//     userPick = 2;
// }

// if (userPick === randomNumber) {
//     document.write('You won the toss.');
// }
// else {
//     document.write('You lost the toss.');
// }




















// var numA = '2.51587648';
// var numB = '2.51587648';

// numA = parseInt(numA);
// numB = parseFloat(numB);

// console.log(numA);
// console.log(numB);











// var numA = '2543.54752844';

// numA = Number(numA);

// console.log(numA);




// var userBill = 200.2222224545454;
// userBill = userBill.toFixed(2); // Rs.200.22 /-

// userBill = userBill.toString();
// userBill = 'Rs.' + userBill + '/-';

// console.log(userBill)














// var cityName = 'My city is Hyderabad';

// var hyderIndex = cityName.indexOf("Hyder"); //10

// cityName = cityName.slice(0, 10) + "Islam" + cityName.slice(15);
// //              My city is Islamabad
// console.log(cityName);




var message = "Ali and Sami are best friends. They play cricket and football together.";

for (var i = 0; i < message.length; i++) {
    var toCheck = message.slice(i, i + 3);
    if (toCheck === 'and') {
        message = message.slice(0, i) + '&' + message.slice(i + 3);
    }
}

console.log(message);