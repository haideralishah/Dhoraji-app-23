// var userName = 'Haider Ali';
// console.log('Hello ' + userName);

// var url = require("url"); 
// var parsedURL = url.parse("http://www.example.com/profile?name=barry");
// console.log(parsedURL.protocol); // "http:"
// console.log(parsedURL.host); // "www.example.com"
// console.log(parsedURL.query);






// var randomInteger = require("./randomNumber");

// var num1 = randomInteger();
// console.log(num1)













// var fs = require("fs");
// var options = { encoding: "utf-8" };
// fs.readFile("myfile.txt", options, function (err, data) {
//     if (err) {
//         console.error("Error reading file!");
//         return;
//     }
//     console.log(data);
// });
















var http = require("http");

function requestHandler(request, response) {
    // console.log("In comes a request to: " + request.url);
    // response.end("Hello, world!");



    if (request.url === "/") {
        response.end("Welcome to the homepage!");
    }
    else if (request.url === "/about") {
        response.end("Welcome to the about page!");
    }
    else {
        response.end("Error! File not found.");
    }
}
var server = http.createServer(requestHandler);
server.listen(3000); 