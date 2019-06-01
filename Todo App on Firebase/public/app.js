var auth = firebase.auth();
var db = firebase.firestore();
var todoDiv = document.getElementById('todo-list');
var fireStorage = firebase.storage();

/*Function for signup*/
function signup() {
    var userName = document.getElementById('username').value;
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;
    auth.createUserWithEmailAndPassword(userEmail, userPassword)
        .then((user) => {
            console.log(user, 'usercreated');
            savePicture(userName, userEmail, user.user.uid);

        })
}

/*function to save picture to DB*/
function savePicture(uName, uEmail, UID) {
    var image = document.getElementById('dp').files[0]
    var storageRef = fireStorage.ref().child(`images/${image.name}`);
    storageRef.put(image)
        .then(function (imageSnapshot) {
            imageSnapshot.ref.getDownloadURL()
                .then(function (downloadURL) {
                    saveUserDetailsToDB(uName, uEmail, UID, downloadURL);
                    localStorage.setItem('uid', UID);
                });
        });
}

/*Function for signin*/
function signin() {
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;
    auth.signInWithEmailAndPassword(userEmail, userPassword)
        .then((user) => {
            console.log(user, 'user authorized');
            localStorage.setItem('uid', user.user.uid);
            location = './home.html';
        })
}

/*Function to save user details to DB*/
function saveUserDetailsToDB(userName, userEmail, uid, DPURL) {
    db.collection("users").add({
        userName,
        userEmail,
        uid,
        DPURL
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            location = './home.html';
        })
}

/*Function to get user detials from DB*/
function getUserDetails() {
    var userUid = localStorage.getItem('uid');
    getUserInfo(userUid);
    getUserTodos(userUid);
}

/*Function to get user info from DB*/
function getUserInfo(uid) {
    db.collection("users").where("uid", "==", uid)
        .get()
        .then(function (userSnapshot) {
            userSnapshot.forEach(function (userDoc) {
                //userDoc.data() 
                //userDoc.id
                greetUser(userDoc.data());
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}


/*Function to get todos from DB*/
function getUserTodos(uid) {
    db.collection("todos").where("uid", "==", uid)
        .onSnapshot(function (todoSnapshot) {
            todoSnapshot.docChanges().forEach(function (change) {
                if (change.type === "added") {
                    makeTodoElements(change.doc.id, change.doc.data());
                }
                if (change.type === "modified") {
                    console.log("Modified todo: ", change.doc.data());
                    updateTodoToDOM(change.doc.data(), change.doc.id);
                }
                if (change.type === "removed") {
                    console.log("Removed city: ", change.doc.data(), change.doc.id);
                    deleteTodoFromDOM(change.doc.id);
                }
            });
        });

}

/*Function to greet user*/
function greetUser(user) {
    document.getElementById('dp').src = user.DPURL;
    document.getElementById('greet-user').innerHTML = `Welcome ${user.userName}`
}


/*Function to add Todo in DB*/
function addTodo() {
    var todo = document.getElementById('todo').value;
    firebase.firestore().collection("todos").add({
        todo, // todo: todo
        uid: localStorage.getItem('uid')
    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
    document.getElementById('todo').value = '';
}



/*Function to make todo elements*/
function makeTodoElements(docId, docData) {
    var div = document.createElement('div');
    var span = document.createElement('span');
    var todoText = document.createTextNode(docData.todo);
    span.appendChild(todoText);

    var delBtn = document.createElement('button');
    var delBtnText = document.createTextNode('Delete');
    delBtn.appendChild(delBtnText);
    delBtn.onclick = function () {
        deleteTodoFromDB(docId);
    }

    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.onclick = function () {
        editTodoFromDOM(docId, docData.todo);
    }




    div.appendChild(span);
    div.appendChild(delBtn);
    div.appendChild(editBtn);
    div.setAttribute('id', docId);

    todoDiv.appendChild(div);

}





/*Function to delete todo from DB*/
function deleteTodoFromDB(docId) {
    db.collection("todos").doc(docId).delete()
        .then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
}



/*Function to delete todo from DOM*/
function deleteTodoFromDOM(docID) {
    // parentDiv.removeChild(nodeToRemove);
    var childToDelete = document.getElementById(docID);
    todoDiv.removeChild(childToDelete);
}




/*Function to edit todo from DOM*/
function editTodoFromDOM(docId, todo) {
    var editTodoElement = document.getElementById(docId);
    console.log(editTodoElement);
    editTodoElement.innerHTML = `<input type='text' id='edit-todo-${docId}' /> <button onclick="saveUpdatedValue(${docId})">Save</button>`
    document.getElementById(`edit-todo-${docId}`).value = todo;

}


/*Function to save edited todo to DB*/
function saveUpdatedValue(todoId) {
    var updatedTodo = todoId.firstChild.value
    db.collection("todos").doc(todoId.id).update({ todo: updatedTodo });
}



/*Function to update edited todo to DOM*/
function updateTodoToDOM(editedData, docID) {
    var span = document.createElement('span');
    var todoText = document.createTextNode(editedData);
    span.appendChild(todoText);

    var delBtn = document.createElement('button');
    var delBtnText = document.createTextNode('Delete');
    delBtn.appendChild(delBtnText);
    delBtn.onclick = function () {
        deleteTodoFromDB(docID);
    }

    var editBtn = document.createElement('button');
    var editBtnText = document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.onclick = function () {
        editTodoFromDOM(docID, editedData);
    }

    var editedTodoDom = document.getElementById(docID);


}