// Chapter 43 to 57


// console.log('hello inside the HTML file'); // Hello World
// console.log('hello inside the HTML file'); //
// console.log('hello inside the HTML file');
// console.log('hello inside the HTML file');


/*
Events
*/


// function greetUser(username) {
//     // var username = "haider";
//     alert(username);
// }













// var h1 = document.getElementById('heading');

// h1.innerHTML = 'Hello JavaScript';





// function getStName() {
//     var stName = document.getElementById('stName');
//     console.log(stName.value);
// }






// function getStudentInfo() {
//     var stName = document.getElementById('stName').value;
//     var stRoll = document.getElementById('stRollNumber').value;
//     var stMarks = document.getElementById('stMarks').value;
//     var stInfo = document.getElementById('student-info');
//     stInfo.innerHTML = stName + ' with roll number ' + stRoll + ' has obtained ' + stMarks + '%.' ;
// }



// function imageElement(){
//     var img = document.getElementById("container");
//     console.log(img.src)
//     img.style.visibility="hide"
//     img.src = "img2.jpg";
// }



/*        */











// function imageElement(element) {
//     console.log(element.src);
// }





/*
1. document.getElementById();
2. Pass ${elementId} to function and use document.getElementById(elementId)
3. Pass ${this} to function 

*/


// First Approach
// function imageElement() {
//     var imageElement = document.getElementById('greet-image');
//     console.log(imageElement.src);
// }

// Second Approach
// function imageElement(idName) {
//     var imageElement = document.getElementById(idName);
//     console.log(imageElement.src);
// }

// Third Approach
// function imageElement(element) {
//       console.log(element.src);
// }



























// function makeItColorful(element){    
//     element.style.color = 'green';
//     element.style.backgroundColor = 'Yellow';
//     //element.innerHTML = 'JADOO';
// }


// function makeItNormal(element){    
//     element.style.color = 'black';
//     element.style.backgroundColor = 'white';
// }















// function makeItColorful(element) {
//     element.style.color = 'green';
//     element.style.backgroundColor = 'Yellow';
// }


// function makeItNormal(element) {
//     element.style.color = 'black';
//     element.style.backgroundColor = 'white';
//     console.log(element.value);

//     var cityName = element.value;
//     var teamName = document.getElementById('team-name');
//     if (cityName.toLowerCase() === 'karachi') {
//         teamName.value = 'Karachi Kings';
//     }
//     else if (cityName.toLowerCase() === 'lahore') {
//         teamName.value = 'Lahore Qalandars';
//     }
// }





// function makeitlongpara(element){
//     element.innerHTML = 'A quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore illo, laudantium corporis fuga nam reprehenderit ullam eligendi culpa ipsum iure alias voluptate odio a sapiente ad! Sint officia magnam soluta!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit quas magni, fugiat, porro minima, dolorem excepturi ab consectetur aspernatur culpa at? Tempora molestiae officiis porro quod odit omnis saepe.lorem'
// }











// function checkAddress(emailId, passwordId, usernameId) {
//     var emailVal = document.getElementById(emailId).value;
//     var passwordVal = document.getElementById(passwordId).value;
//     var usernameVal = document.getElementById(usernameId).value;


//     if (emailVal === "" || passwordVal === "" || usernameVal === "") {
//         alert("All fields are required.");
//     }

// }


















// function addTodo() {
//     var todo = document.getElementById('todo').value;
//     var allTodos = document.getElementById('all-todos');
//     var formError = document.getElementById('form-error');
//     var li = allTodos.innerHTML;

//     if (todo !== '') {
//         allTodos.innerHTML = li + '<li>' + todo + '</li>'
//         document.getElementById('todo').value = '';
//         formError.innerHTML = '';
//     }
//     else {
//         formError.innerHTML = 'All fields are required.';
//     }
// }
















// function makeitbeautiful() {
//     var h1 = document.getElementById('heading');
//     //h1.className = h1.className + ' beautiful';
//     h1.className += ' beautiful';
// }


// var numA = 5;

// numA = numA + 7;

// numA += 7;

// console.log(numA);




// function swapImage() {
//     var imageElement = document.getElementById('heading');
//     imageElement.src = './ab.PNG';
// }



// function swapImage(id, newImage) {
//     var imageElement = document.getElementById(id);
//     imageElement.src = newImage;
// }



// function swapImage(element, newImage) {
//         element.src = newImage;
// }



















// var h1 = document.getElementById('heading');

// console.log(window.getComputedStyle(h1).color);











var allPara= document.getElementsByTagName("p");

console.log(allPara);

for(var i =0; i< allPara.length; i++){
        allPara[i].style.fontSize = '2em';
}


// allPara[0].innerHTML = 'Some Para'










