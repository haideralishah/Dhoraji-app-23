



// var userInput = +prompt('what is your age?');

// if(userInput < 18){    
//     console.log("Welcome to the Dhoraji Club.");
// }
// else{
//     console.log("Sorry, you are not eligible.")
// }














// var num1 = 1;
// var num2 = 3;


/*

num1 === num2 // equals to
num1 !== num2 // not equals to

num1 > num2   // greater than
num1 < num2   // smaller than

num1 >= num2  // greater than or equals to
num1 <= num2  // smaller than or equals to


*/



// var myAge = +prompt('Enter your age.');
// var friendsAge = +prompt('Enter your friends age.');


// if(myAge > friendsAge){
//     console.log('I am older than my friend.');
// }
// else{
//     console.log("My friend is older than me");
// }











// var shopName = prompt("Which shop is open?");

// if(shopName === "Shamoon"){
//     console.log('bring 1 KG Daal');
// }
// else if(shopName === "Mudassir"){
//     console.log('bring 10 KG Daal');
// }
// else if(shopName === "Kamran"){
//     console.log('bring half KG Daal');
// }
// else{
//     console.log('bring cooked Daal 1 plate');
// }
















// and    &&
// or     ||



// var item1 = 'kurkure';
// var item2 = 'pepsi';

// if (item1 === 'lays' || item2 === 'pepsi') {
//     console.log('bring pepsi and lays');
// }















//   80+   A+ 
//   70+  80<   A  
//   60+  70<   B
//   50+  60<   C
//   40+  50<   D
//   33+  40<   E
//   33<        F


// var percentage = +prompt("what is your percentage?");


// if(percentage >= 80){
//     document.write('Congaratulations! You got A+');
// }
// else if(percentage >= 70 && percentage < 80){
//     document.write('Congaratulations! You got A');
// }
// else if(percentage >= 60 && percentage < 70){
//     document.write('You got B');
// }
// else if(percentage >= 50 && percentage < 60){
//     document.write('You got C');
// }
// else if(percentage >= 40 && percentage < 50){
//     document.write('You got D');
// }
// else if(percentage > 33 && percentage < 40){
//     document.write('You got E');
// }
// else{
//     document.write('Sorry! You are failed.');
// }






// var age = prompt('what is your age?');
// var community = prompt('Which community you belong to?');

// if(age <= 17 && community === 'dhoraji'){
//     console.log('Congrats! you got admission.');
// }

// var community = prompt('which community you belong to?');
// var grade = prompt("what grade you obtained?");

// if(community === 'dhoraji' || grade === 'A+'){
//     console.log('Congrats! you got admission.');

// }


























// var age = prompt('what is your age?');
// var format = prompt('which format you want to play?');
// var team;
// if (age >= 18) {
//     if (format === 'test') {
//         console.log('you qualified for adult test cricket team');
//     }
//     else if (format === 'od') {
//         console.log('You qualified for adult one day team.');
//     }
//     else {
//         console.log('you qualified for adult T20 team.');
//     }

// }
// else {
//     if(format === 'test'){
//         console.log('you qualified for under 18 test team');
//     }
//     else if(format === 'od'){
//         console.log('You qualified for under 18 one day team.');
//     }
//     else{
//         console.log('you qualified for under 18 T20 team.');
//     }
// }





// var tableName = +prompt("Enter a table name.");
// var count = 1;

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// //             2 X 1 = 2
// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");
// //              2  x  2 = 

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");

// document.write(tableName + " x " + count + " = " + tableName * count++ + "<br />");










// var gender = prompt('what is your gender?');

// if(gender === "male"){
//     document.write("Good Morning Sir!");
// }
// else{
//     document.write("Good Morning Ma'am !");
// }






// var maxAge = +prompt('what is the max age required for the admission of your club?');
// var userAge = +prompt('what is user age?');

// if (userAge <= maxAge) {
//     document.write('Congrats! you got admission.')
// }
// else if (userAge > maxAge) {
//     document.write('You do not qualify for admission.');
// }
// else {
//     document.write('Something went wrong.');
// }





// var mathsScore = +prompt('What was your Maths score?');
// var englishScore = +prompt('What was your English score?');
// var csScore = +prompt('What was your Computer Science score?');
// var obtainedMarks = mathsScore + englishScore + csScore;
// var totalPercent = obtainedMarks / 300 * 100;

// document.write('<h1>Marks Sheet</h1><br />');

// document.write('Total Marks: ' + 300 + '<br />');
// document.write('Marks Obtained: ' + obtainedMarks + '<br />');
// document.write('Percentage: ' + totalPercent + '%' + '<br />');


// if (totalPercent >= 80) {
//     document.write("Grade: A+");  
// }
// else if(totalPercent >= 70 && totalPercent < 80) {
//     document.write("Grade: A");  
// }
// else if(totalPercent >= 60 && totalPercent < 70) {
//     document.write("Grade: B");  
// }
// else if(totalPercent < 60) {
//     document.write("Grade: Fail");  
// }






// var secreteNumber = 3;

// var userGuess = +prompt('Guess a number between 1 to 5.');


// if (userGuess === secreteNumber) {
//     document.write('Bingo! You chose correct answer.');
// }
// else {
//     var difference = secreteNumber - userGuess;
//     document.write("You are closer " + difference);
// }













// var userInput = +prompt('tell us a number');


// if (userInput % 3 === 0) {
//     document.write(userInput + ' is divisible by 3.');
// }
// else{
//     document.write(userInput + ' is not divisible by 3.');
// }
















// var userInput = +prompt('tell us a number');


// if (userInput % 2 === 0) {
//     document.write(userInput + ' is even.');
// }
// else{
//     document.write(userInput + ' is odd.');
// }






var firstNum = +prompt('enter first number');
var secondNum = +prompt('enter second number');
var operator = prompt('enter operator');

if(operator === '+'){
    document.write(firstNum + secondNum);
}
else if(operator === '-'){
    document.write(firstNum - secondNum);
}
else if(operator === '*'){
    document.write(firstNum * secondNum);
}
else if(operator === '/'){
    document.write(firstNum / secondNum);
}
else if(operator === '%'){
    document.write(firstNum % secondNum);
}