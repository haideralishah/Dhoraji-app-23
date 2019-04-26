// var count = 1;

// console.log(count);

// count++


// for (var count = 0; count < 51; count= count +2) {
//     console.log(count);
// }

































// var fruitsName = ['apple', 'banana', 'orange'];


// for(var i=0; i < fruitsName.length; i++){
//         console.log(fruitsName[i] + 's');
// }







































// function addAllValues(first, b, c) {
//     var sum = first + b + c;
//     return sum;
// }

// addAllValues(1, 2, 6);

// var sumOfAll = addAllValues(4, 2, 6);

// alert(sumOfAll);






































// var abc = 'haider';
// let username = 'ali';


// if(true){
//     let username='haider'
//     console.log(username);
    
// }
// console.log(username);







// const username = 'haider';
// // username = 'ali';
// console.log(username);

















// let greet = function (){
//     return 'hello es6'
// }


// let greet = () => 'hello es6';

// var usergreet = greet();
// console.log(usergreet);


// setInterval(()=>{
//     console.log('hello es6');
// }, 1000)

































function Car(carname){
    this.car = carname
    console.log(this);
}

var suzuki = new Car('Suzuki');

console.log(this);