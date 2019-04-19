var errEl = document.getElementById('error');

// function checkForLastName() {
//     var lastNameEl = document.getElementById('lastNameField');

//     if (lastNameEl.value.length === 0) {      


//         lastNameEl.focus();
//         errEl.innerHTML = 'last name field is required.'; 
//         lastNameEl.style.border = "5px dotted red";

//         setTimeout(function(){
//             errEl.innerHTML = ''; 
//             lastNameEl.style.border = "1px solid black";
//         }, 3000);

//         return false;
//     }
// }




































// function checkForSelection() {
//     var dropEl = document.getElementById("states");
//     if (dropEl.selectedIndex === 0) {
//         // alert("Please select a state.");

//        errEl.innerHTML = 'You must select atleast 1 index.';


//         setTimeout(function () {
//             errEl.innerHTML = '';

//         }, 3000);
//         return false;
//     }
// }






















// function validateRadios() {
//     var radios = document.getElementsByName("r1");
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return true;
//         }
//     }
//     // alert("Please check one.");


//     errEl.innerHTML = 'You must select atleast 1 radio.';


//     setTimeout(function () {
//         errEl.innerHTML = '';

//     }, 3000);
//     return false;

// }



















































// function greetWorld() {
//     try {
//         var greeting = "Hello world!";
//         // aler(greeting);

//         throw 'Welcome To Error World!'

//     }
//     catch (error) {
//         // console.log(error);


//         // errEl.innerHTML = error;

//         console.error(error);
//         console.log(error);
//         console.warn(error);

//     }

// }













function greet() {
    console.log('Good Bye JavaScript');
}


var btn = document.getElementById('button');
btn.onclick = greet;