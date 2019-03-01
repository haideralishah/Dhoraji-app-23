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















function makeItColorful(element) {
    element.style.color = 'green';
    element.style.backgroundColor = 'Yellow';
}


function makeItNormal(element) {
    element.style.color = 'black';
    element.style.backgroundColor = 'white';
    console.log(element.value);
    
    var cityName = element.value;
    var teamName = document.getElementById('team-name');
    if (cityName.toLowerCase() === 'karachi') {
        teamName.value = 'Karachi Kings';
    }
    else if (cityName.toLowerCase() === 'lahore') {
        teamName.value = 'Lahore Qalandars';
    }
}





function makeitlongpara(element){
    element.innerHTML = 'A quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore illo, laudantium corporis fuga nam reprehenderit ullam eligendi culpa ipsum iure alias voluptate odio a sapiente ad! Sint officia magnam soluta!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit quas magni, fugiat, porro minima, dolorem excepturi ab consectetur aspernatur culpa at? Tempora molestiae officiis porro quod odit omnis saepe.lorem'
}











