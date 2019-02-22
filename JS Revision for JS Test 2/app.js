





// function doSum() {
//     var sum = num1 + num2;
//     alert(sum);
// }


// doSum();
// doSum();
// doSum();
// doSum();
// doSum();


















// function bringNashta(){

//     console.log('bring me a cup of tea with some snacks');
// }


// bringNashta();


// bringNashta();

















// function doSum(num2, num1) {
//     var sum = num1 + num2;
//     console.log(sum);
// }


// doSum(2, 4); // 6
// doSum(4, 8); // 12 
// doSum(7, 1); // 8









// function doSum(num2, num1) {
//     var sum = num1 + num2;
//     return sum;
// }


// var mySum = doSum(2, 7);

// console.log(mySum);






















// /******Chapter 21 ********/

// var userName = 'hAiDEr';

// userName = userName.toUpperCase();
// userName = userName.toLowerCase();


// var firstChr = userName.slice(0,1);
// var otherChr = userName.slice(1);

// firstChr = firstChr.toUpperCase();
// otherChr = otherChr.toLowerCase();

// userName = firstChr + otherChr;

















/******Chapter 22 ********/


// var slogan = 'I love Pakistan';

// var countryName = slogan.slice(7,10);

// console.log(countryName);




// var currentMonth = prompt('tell us a month');

// if (currentMonth.length > 3) {
//     currentMonth = currentMonth.slice(0, 3);
// }

// console.log(currentMonth)








/******Chapter 23 and 24 ********/



// var article = `It is startling to think that, even in the darkest depths of World War II, J. R. R. Tolkien was
// writing the World War II trilogy, which contains, with the weird applicability World War II available only to poetry and
// myth`;


// // var secondArticle='I think Lahore Qalanar is going to win PSL4';

// //second world war

// article = article.replace('World War II', 'second world war');




// for (var i = 0; i < article.length; i++) {
//     // console.log(article.slice(i, i + 12));
//     if (article.slice(i, i + 12) === 'World War II') {
//         article = article.slice(0, i) + 'second world war' + article.slice(i + 12)
//     }
// }

// console.log(article);


// var findTextIndex = article.indexOf('World War II');
// if (findTextIndex !== -1) {
//     article = article.slice(0, findTextIndex) + 'second world war' + article.slice(findTextIndex + 12)
// }
// console.log(article)








/******Chapter 24 ********/


// var userName = 'haider';

// userName.charAt(2);
// userName[2];

// userName[userName.length - 1];
// userName.charAt(userName.length - 1);


/******Chapter 26, 27, 28, 29 and 30 ********/

// var bill = 5.77879324146574;

// var roundBill = Math.round(bill);
// var ceilBill = Math.ceil(bill); // - 0.1
// var floorBill = Math.floor(bill);



// var luckeyDraw = Math.random();
// console.log(luckeyDraw);


// luckeyDraw = luckeyDraw * 5 + 1


// luckeyDraw = Math.round(luckeyDraw);

// luckeyDraw = luckeyDraw * 6

// luckeyDraw = Math.ceil(luckeyDraw);


// luckeyDraw = luckeyDraw * 6 + 1

// luckeyDraw = Math.floor(luckeyDraw);
// console.log(luckeyDraw);





// var myNum = 5132465.4548;
// myNum = parseInt(myNum);



// var profit = "200" + "150";


// var profit = "200" + 150;



/******Chapter 30 ********/


var rightNow = new Date();
console.log(rightNow);