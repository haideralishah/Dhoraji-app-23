// var cleanCities = ['Karachi', 'Lahore', 'Islamabad'];
// var userInput = prompt('enter your city name');
// // karachi
// var fstChr = userInput.slice(0, 1);  // k
// var remChr= userInput.slice(1);      // arachi

// fstChr = fstChr.toUpperCase(); // K
// remChr = remChr.toLowerCase();  // arachi

// userInput = fstChr + remChr; // Karachi

// var isMatch = false;

// for (var i = 0; i < cleanCities.length; i++) {
//     if (cleanCities[i] === userInput) {
//         isMatch = true;
//     }
// }

// if (isMatch === true) {
//     document.write('Your city is clean city');
// }








// var userInput= prompt('which month is running');
// userInput = userInput.slice(0,3);
// console.log(userInput);




















// var userInput = prompt('enter any word'); // karachi
// var aCount = 0;

// for (var i = 0; i < userInput.length; i++) {

//     var toCheck = userInput.slice(i, i + 2).toLowerCase(); // ka
//     console.log(toCheck);

//     if (toCheck === 'aa') {
//         aCount++;
//     }
// }

// console.log(aCount);






// var htmlString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos pariatur nemo corrupti esse minus, eveniet aperiam quidem alias amet obcaecati, ipsum vero magnam cum laborum rem enim earum eaque!';
// var count = 0;

// for (var i = 0; i < htmlString.length; i++) {
//     var toCheck = htmlString.slice(i, i + 5);
//     console.log(toCheck);
//     if (toCheck === 'ipsum') {
//         count++;
//     }
// }
// console.log(count);







// var newStr = 'The New Yorker magazine does not allow the phrase World War II. The New Yorker magazine does not allow the phrase World War II. The New Yorker magazine does not allow the phrase World War II. '
// // second world war

// for (var i = 0; i < newStr.length; i++) {
//     if (newStr.slice(i, i + 8) === 'magazine') {
//         newStr = newStr.slice(0, i) + 'second world war' + newStr.slice(i + 8);
//     }
// }
// console.log(newStr);














// var newStr = 'The New Yorker magazine does not allow the phrase World War II.';

// var magIndex = newStr.indexOf('magazine');

// newStr = newStr.slice(0, magIndex) + 'article' + newStr.slice(magIndex + 8);
// console.log(newStr)







var userName = 'Haider Ali shah';


// console.log(userName.lastIndexOf('i'));


// console.log(userName[3]);

// console.log(userName.charAt(3));

// console.log(userName[userName.length - 1]);





// var userInput = prompt('enter any sentence');

// // !


// // for(var i =0; i< userInput.length; i++){
// //     if(userInput[i] === '!'){
// //         alert('! sign found.');
// //     }
// // }


// if(userInput.indexOf('!') !== -1){
//     alert('! sign found.');
// }
















var text = 'The New Yorker magazine does not allow the phrase World War II.';

// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         text = text.slice(0, 1) + "the Second World War" + text.slice(i + 12);
//     }
// }


// var firstChar = text.indexOf("World War II");
// if (firstChar !== -1) {
//     text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
// }


text = text.replace('World War II', "the Second World War");
console.log(text);