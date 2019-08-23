// var express = require('express');

// var app = express();

// function returnRandomNumber(numType) {
//     var randomNumber = Math.ceil(Math.random() * 100);
//     if (randomNumber % 2 === 0) {
//         if (numType === 'even') {
//             return randomNumber;
//         }
//         else {
//             return randomNumber + 1;
//         }
//     }
//     else {
//         if (numType === 'odd') {
//             return randomNumber;
//         }
//         else {
//             return randomNumber + 1;
//         }
//     }
// }

// app.get('/odd', function (req, res, next) {
//     var ranNum = returnRandomNumber('odd');
//     res.send(ranNum.toString());
// })

// app.get('/even', function (req, res, next) {
//     var ranNum = returnRandomNumber('even')
//     res.send(ranNum.toString());
// })


// app.listen(3000, function () {
//     console.log('sever is running on 3000')
// })























// var express = require('express');
// var bodyParser = require('body-parser');


// var app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// var userExist = {
//     email: 'abc@gmail.com',
//     password: '123456'
// }


// app.use((req, res, next) => {
//     console.log(req.body);
//     res.status(200)
//     res.end();
// })


// app.listen(3000, function () {
//     console.log('sever is running on 3000')
// })



































var express = require('express');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var userExist = {
    email: 'abc@gmail.com',
    password: '123456'
}

app.use(function (req, res, next) {
    if (req.body.email === userExist.email && req.body.password === userExist.password) {
        next();
    }
    else {
        if (req.body.email !== userExist.email) {
            next(new Error('Email does not exist.'))
        }
        else if (req.body.password !== userExist.password) {
            next(new Error('Password incorrect.'))
        }
    }
})
app.use(function (req, res, next) {
    var secret_info = '/*55s*3/20183477%%&#*@$';
    res.send(secret_info);
})


app.use(function (err, req, res, next) {
    // console.log('error: ', err);
    res.json(JSON.stringify(err));
})




app.listen(3000, function () {
    console.log('sever is running on 3000')
})