
// str.toLowerCase();
// str.toUpperCase();

// var userInput = prompt('enter any string');

// var userInputInLowerCase = userInput.toLowerCase();
// var userInputInUpperCase = userInput.toUpperCase();

// document.write(userInputInLowerCase + '<br />');
// document.write(userInputInUpperCase + '<br />');




























// var menu = ['tikka', 'garlic roll', 'biryani'];
// var userInput = prompt('What would you like to eat?');
// var itemAvailalbe = false;

// for (var i = 0; i < menu.length; i++) {
//     if (userInput.toLowerCase() === menu[i]) {
//         itemAvailalbe = true;
//         break;
//     }
// }

// if(itemAvailalbe === true){
//     console.log('We will be delivering in 20 minutes.');
// }
// else if(itemAvailalbe !== true){
//     console.log('We do not serve this item.');
// }













// .length
// .slice()

// var firstName = 'haider ';
// var lastName = 'ali';


// console.log(firstName.length);
// console.log(firstName.slice(2,4));


// var userName = prompt('what is your name?');
// var firstChr = userName.slice(0,1);
// var remainingChr = userName.slice(1);

// firstChr = firstChr.toUpperCase();
// remainingChr = remainingChr.toLowerCase();


// console.log(firstChr + remainingChr);



















var userName = prompt('What is your name?');
//Haider  Ali


for(var i = 0; i < userName.length; i++){
    //  "ai"
    if(userName.slice(i, i + 2) === '  '){
        alert('double space not allowed');
    }
}




