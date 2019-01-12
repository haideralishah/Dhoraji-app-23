

// for (var i = 0; i <= 100; i++) {
//     console.log(i);
// }




// var tableName = +prompt('enter table name');
// for (var i = 1; i < 11; i++) {
//     document.write(tableName + " x " + i + " = " + tableName * i + "<br />")
// }   
















// var fruits = ['Apple', 'Banan', 'Grapes', 'Mango'];

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }















// var communities = ['Dhoraji', 'Patel', 'Naviwala', 'Fazal', 'Ghori'];
// var userCommunity = prompt('what is your community?');

// for (var i = 0; i < communities.length; i++) {
//     if (userCommunity === communities[i]) {
//             console.log('Welcome to Memon Community.');
//     }
// }















// var communities = ['Dhoraji', 'Patel', 'Naviwala', 'Fazal', 'Ghori'];
// var userCommunity = prompt('what is your community?');
// var matched = false;
// for (var i = 0; i < communities.length; i++) {
//     if (userCommunity === communities[i]) {
//         matched = true;
//     }
// }

// if(matched=== true){
//     console.log('welcome to Memon Community');
// }
// else{
//     console.log('You do not belong to Memon Community');
// }

























// var communities = ['Dhoraji', 'Patel', 'Naviwala', 'Fazal', 'Ghori'];
// var userCommunity = prompt('what is your community?');
// var matched = false;
// for (var i = 0; i < communities.length; i++) {
//     console.log(i);
//     if (userCommunity === communities[i]) {
//         matched = true;
//         break;
//     }
// }

// if (matched === true) {
//     console.log('welcome to Memon Community');
// }
// else {
//     console.log('You do not belong to Memon Community');
// }

























// var firstNames = ['Ali', 'Akbar', 'Usman'];
// var lastNames = ['Durrani', 'Barni', 'Ansari'];

// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         console.log(firstNames[i] + " " + lastNames[j]);
//     }
// }










var lengthOfArr = +prompt('favorite fruits length');

var fruitsItem = [];

for(var i =0; i< lengthOfArr; i++){
    var userInput = prompt('enter any favorite fruit');
    fruitsItem.push(userInput);
}

console.log(fruitsItem);