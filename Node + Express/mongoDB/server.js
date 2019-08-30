var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var UserModel = require('./models/user');
var TodosModel = require('./models/todo');

mongoose.connect('mongodb+srv://dhoraji:dhoraji@cluster0testing-gxgji.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/createUser', function (req, res, next) {
    var newUser = new UserModel({
        email: req.body.email,
        password: req.body.password,
        displayUserName: req.body.userName
    });
    var newUserObject = {
        email: req.body.email,
        password: req.body.password,
        displayUserName: req.body.userName
    }
    console.log(req.body, 'newUser')
    newUser.save(function (err, dataSaved) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(dataSaved);
        }
    });

})


app.post('/signin', function (req, res, next) {
    UserModel.findOne({ email: req.body.email }, function (err, userFound) {
        if (err) {
            res.send(err);
        }
        else {
            if (userFound.password === req.body.password) {
                res.send('user authorized');
            }
            else {
                res.send('user unauthorized');

            }
        }
    })
})


app.post('/addTodo', function (req, res, next) {
    var todoToSave = new TodosModel({
        todo: req.body.todo,
        userID: req.body.uid
    })
    todoToSave.save(function (err, todoSaved) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(todoSaved);
        }
    })

})



app.post('/getAllTodos', function (req, res, next) {
    TodosModel.find({ userID: req.body.uid }, function (err, allTodos) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(allTodos);
        }
    })
})




app.post('/deleteOneTodo', function (req, res, next) {
    TodosModel.deleteOne({ _id: req.body.todoId }, function (err, deletedTodo) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedTodo);
        }
    })
})




app.post('/deleteAll', function (req, res, next) {
    TodosModel.deleteMany({ userID: req.body.uid }, function (err, deletedTodo) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedTodo);
        }
    })
})




app.post('/updateTodo', function (req, res, next) {

    TodosModel.update({ _id: req.body.todoId }, { todo: req.body.updatedTodo }, { returnOriginal: false }, function (err, deletedTodo) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(deletedTodo);
        }
    })
})






app.get('/dummyAPI', function (req, res, next) {
    console.log('request')
    res.text('hello world');
})









app.listen(3000, function () {
    console.log('app is running on port 3000');
})