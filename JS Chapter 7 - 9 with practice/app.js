// var initNumber = 1;

// console.log(initNumber++); // 1

// console.log(initNumber++); // 2


// console.log(initNumber); // 3 


// var anotherInitNumber = 7;

// console.log(++anotherInitNumber);   // 8

// console.log(anotherInitNumber++);   // 8

// console.log(++anotherInitNumber);   // 10










// var aNum = 7;
// var bNum = 7;

// console.log(aNum++ + ++aNum + ++aNum - aNum++ - ++aNum);
//            7    +   9    +   10   -  10    -  12

// 4
// 4
// 5
// 5
// 4
// 8
// 2
// 5














var tableName = 2;
var count = 1;

//         2 x 1 = 2
//         2 x 2 = 

// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);
// console.log(tableName + " x " + count + " = " + tableName * count++);



// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");













// var initNumber = 3 * 2; // 6 

// console.log(initNumber--);  // 6

// console.log(--initNumber); // 4 

// console.log(initNumber++ + --initNumber * 2 + ++initNumber);
//            4         +      4      * 2 +   5

// 3
// 3
// 5
// 1
// 5




















// var userName = prompt("What is your name?", 'haider');
// console.log(userName);




// var num1 = +prompt("Tell us a number.");
// var num2 = +prompt("Tell us another number.");

// console.log(num1 + num2);





/*
user name
class

Maths 
Computer Science
Electronics


Mr. xyz, you obtained abc% in class xhz.


(maths + cs + electronics) / (75 * 3) * 100



*/


var userName = prompt('What is your name?');
var inClass = prompt('In which class do you study?')
var mathsScore = +prompt('What is your maths score?');
var csScore = +prompt('What is your CS score?');
var electronicsScore = +prompt('What is your electronics score?');

var totalScore = 75 * 3;
var totalObtainedMarks = mathsScore + csScore + electronicsScore;

var percentage = totalObtainedMarks / totalScore * 100;

//Mr. xyz, you obtained abc% in class xhz.
document.write("Mr. " + userName + ", you obtained " + percentage + " % in class " + inClass + '.')






