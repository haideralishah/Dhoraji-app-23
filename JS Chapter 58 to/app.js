

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


/*
element.attributeName

element.hasAttribute('attributeName')

element.setAttribute('attributeName', 'value')

element.getAttribute('attributeName')

element.attributes; // list of attributes

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













// var targetNode = document
//     .childNodes[1]
//     .childNodes[2]
//     .childNodes[1];

// // console.log(targetNode);

// // targetNode.id = 'dumpty';
// // console.log(targetNode.hasAttribute('src'));

// // targetNode.setAttribute('class', 'dummy-div');

// var targetNodeId = targetNode.getAttribute('class');

// console.log(targetNodeId)


// var targetNodeAttr = document.getElementById('humpty').attributes[2];

// console.log(targetNodeAttr);






















/*

document.createElement('ElementName');
document.createTextNode('any text');
.appendChild(childElement)
.insertBefore(newChildElement, nextPara)
parent.removeChild(childNode)



*/



// var img = document.createElement('img');
// img.setAttribute('src', filePath)
// img.setAttribute('alt', 'xyz')


// var targetNode = document.getElementById('humpty')

// var p = document.createElement('P');
// p.setAttribute('id', 'custome-para');

// var textpara = document.createTextNode('Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, perspiciatis sint ea mollitia id omnis, culpa repellat voluptatum reprehenderit ut nobis in. Dicta error, repellendus hic odio iste molestias cumque?');
// p.appendChild(textpara);
// targetNode.appendChild(p);


// var p2 = document.createElement('P');
// var textpara2 = document.createTextNode('learning DOM');
// p2.appendChild(textpara2);


// targetNode.appendChild(p2);







// var parentNode = document.getElementById('humpty');
// var firstChildNode = document.getElementById('humpty').childNodes[1];

// var p = document.createElement('p');
// var text= document.createTextNode('I like apple.');
// p.appendChild(text);

// // parentNode.appendChild(p)

// parentNode.insertBefore(p, firstChildNode);



var parentNode = document.getElementById('humpty');

var secondPara = document.getElementById('humpty').childNodes[3];

console.log(parentNode,secondPara);


parentNode.removeChild(secondPara);














