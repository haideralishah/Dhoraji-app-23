/*

string
number
boolean
undefined

Array (Object)


*/




// var city1 = "Karachi";
// var city2 = "Lahore";
// var city3 = "Islamabad";


// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta"];

// console.log(cities);


// cities[4] = "Peshawar";
// console.log(cities);







// var students = [];

// students[0] = 'Saad';
// students[1] = 'Haseeb';
// students[3]= 'Naeem';

// console.log(students[2]);












// var mixArray = ['Haider', 2643, true, undefined, ['03413542800', '03059898769']]

// console.log(mixArray[4][1]);










// var fruits = ["Apple", "Banana", "Orange"];


// // adds in end of array
// fruits.push('grapes'); 


// // adds in begining of array
// fruits.unshift('Mango');

// console.log(fruits)






// var vegetables = ['Tomato', 'potato', 'onion'];

// //removes last index
// vegetables.pop();

// //removes first index
// vegetables.shift();

// console.log(vegetables);







// var animals = ['lion', 'cow', 'elephant', 'dog', 'cat'];

// animals.splice(2, 1, 'Camel', 'Horse', 'Tiger');

// console.log(animals);










// var animals = ['lion', 'cow', 'elephant', 'dog', 'cat'];

// // console.log(animals.length);


// var elephantIndex = animals.indexOf('cow');
// console.log(elephantIndex);











// var fruits = ['Apple','Banana', 'Orange', 'Watermelon', 'Mango', 'Strawberry'];



// var myFavFruits = fruits.slice(2,6);

// console.log(myFavFruits);













var colorsName = ['red', 'blue', 'green'];
console.log(colorsName);
var userInput = prompt('What is your favourite color?');

colorsName.unshift(userInput);
console.log(colorsName);

var userIndex = +prompt('index to add new item');
var newColor = prompt('new color');

colorsName.splice(userIndex, 0, newColor)
console.log(colorsName)
