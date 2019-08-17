var express = require("express");
var app = express();
app.use(function (request, response, next) {
    console.log('initial middleware called')
    next()
})
app.get("/", function (request, response) {
    response.send("Hello world!");
});
app.get("/about", function (request, response) {
    response.send("Hello about!");
});
app.use(function(request,response, next){
    response.send("Bad Request");
});
app.get("/service", function (request, response) {
    response.send("Hello about!");
});

app.listen(3000, function () {
    console.log("Express app started on port 3000.");
});











// var express = require("express");
// var http = require("http");


// var app = express();



// app.use(function (request, response) {
//     response.writeHead(200, { "Content-Type": "text/plain" });
//     response.end("Hello, World!");
// });


// http.createServer(app).listen(3000); 