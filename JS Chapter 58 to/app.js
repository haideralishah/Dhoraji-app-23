

/*
//document.getElementById();

//document.getElementByTagname();

//document.childNodes;


.nodeName // element name in caps letter
.nodeValue // text value
.nodeType // either 1 for tags or 3 is for text
.firstChild // childNode[0]
.lastChild // childNode[lastIndex]
.parentNode
.nextSibling
.previousSibling



*/







// var elem = document.childNodes[1]
//                 .childNodes[2]
//                 .childNodes[1];
// console.log(elem);
// elem.innerHTML = 'Hello JavaScript';








// function add() {

//     var elem = document.childNodes[1]
//         .childNodes[2]
//         .childNodes;
//     console.log(elem[3]);
//     console.log(elem[7]);

// }















// var bigCity = document.getElementById('citiesname');
// console.log(bigCity.childNodes[5].innerHTML);


































// var targetNode = document
//     .childNodes[1]
//     .childNodes[2]
//     .childNodes;


// console.log(targetNode,
//      ' has node type of ' + targetNode.nodeType+ 
//      ' with node name of '  
//      + targetNode.nodeName);




























// var targetNode = document
//     .childNodes[1]
//     .childNodes[2]
//     .childNodes;
// console.log(targetNode);
// var tagsCount = 0;
// var textNodeCount = 0;
// for (var i = 0; i < targetNode.length; i++) {
//     if (targetNode[i].nodeType === 1) {
//         tagsCount++;
//     }
//     else if (targetNode[i].nodeType === 3) {
//         textNodeCount++;
//     }
// }
// console.log('My html body has ' + tagsCount + ' tags and ' + textNodeCount + ' text nodes.')


























// var targetNode = document
//     .childNodes[1]
//     .childNodes[2]
//     .childNodes[1].childNodes;
// console.log(targetNode);





































// var divNode = document.getElementById("humpty").childNodes;
// var pCounter = 0;


// for (var i = 0; i < divNode.length; i++) {
//     console.log(divNode[i]);
//     if (divNode[i].nodeType === 1) {
//         pCounter++;
//     }
//     if (pCounter === 2) {
//         divNode[i].innerHTML = "All his men.";
//         break;
//     }
// }











/*
element.attributeName

element.hasAttribute('attributeName')

element.setAttribute('attributeName', 'value')

*/



var targetNode = document
    .childNodes[1]
    .childNodes[2]
    .childNodes[1];

targetNode.id = 'dumpty';
console.log(targetNode.hasAttribute('src'));

targetNode.setAttribute('class', 'dummy-div');