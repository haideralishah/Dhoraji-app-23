import firebase from 'firebase';
import Apphistory from '../../History'

var firebaseConfig = {
    apiKey: "AIzaSyAhLAHnxqQQUqev8rojVfnRP2mEDPBvgII",
    authDomain: "dhoraji-learning.firebaseapp.com",
    databaseURL: "https://dhoraji-learning.firebaseio.com",
    projectId: "dhoraji-learning",
    storageBucket: "dhoraji-learning.appspot.com",
    messagingSenderId: "472387476837",
    appId: "1:472387476837:web:6b2cbb8ca9262af0"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
export function signup(email, password) {
    return (dispatch) => {
        console.log(email, password);
        dispatch({ type: 'CHANGE_LOADER' })
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                dispatch({ type: 'CHANGE_LOADER' });
                dispatch({ type: 'LOGGEDIN_USER', payload: { email: user.user.email, uid: user.user.uid } })
                dispatch(fetchTodos(user.user.uid));
                Apphistory.push('./home');
            })
            .catch((error) => {
                dispatch({ type: 'SHOW_ERROR', payload: error.message });
                dispatch({ type: 'CHANGE_LOADER' });
                dispatch(removeError());
            })
    }
}


function removeError() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({ type: "REMOVE_ERROR" });
        }, 5000);
    }
}

export function signin(email, password) {
    return (dispatch) => {
        console.log(email, password);
        dispatch({ type: 'CHANGE_LOADER' })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                dispatch({ type: 'CHANGE_LOADER' });
                dispatch({ type: 'LOGGEDIN_USER', payload: { email: user.user.email, uid: user.user.uid } })
                dispatch(fetchTodos(user.user.uid));
                Apphistory.push('./todos');
            })
            .catch((error) => {
                dispatch({ type: 'SHOW_ERROR', payload: error.message });
                dispatch({ type: 'CHANGE_LOADER' });
                dispatch(removeError());
            })
    }
}



export function addTodotoFirebase(todoInput, uid) {
    return (dispatch) => {
        console.log(todoInput);
        let todoObj = {
            todoInput,
            uid
        }
        dispatch({ type: 'CHANGE_LOADER' })

        db.collection('todos').add(todoObj).then(ref => {
            console.log('Added document with ID: ', ref.id);
            dispatch({ type: 'CHANGE_LOADER' })

        }).catch((error) => {
            dispatch({ type: 'SHOW_ERROR', payload: error.message });
            dispatch({ type: 'CHANGE_LOADER' });
            dispatch(removeError());
        })


    }
}


function fetchTodos(uid) {
    return (dispatch) => {
        db.collection("todos").where("uid", "==", uid)
            .onSnapshot(function (todoSnapshot) {
                todoSnapshot.docChanges().forEach(function (change) {
                    if (change.type === "added") {
                        let todoObject = {
                            docId: change.doc.id,
                            todo: change.doc.data().todoInput,
                            uid: change.doc.data().uid
                        }
                        dispatch({ type: 'ALL_TODOS', payload: todoObject })
                    }
                    if (change.type === "modified") {
                        console.log("Modified city: ", change.doc.data());
                        let todoObject = {
                            docId: change.doc.id,
                            todo: change.doc.data().todoInput,
                            uid: change.doc.data().uid
                        }
                        console.log(todoObject, 'dispatch')
                        dispatch({ type: 'EDIT_TODO', payload: todoObject })
                    }
                    if (change.type === "removed") {
                        let todoObject = {
                            docId: change.doc.id,
                            todo: change.doc.data().todoInput,
                            uid: change.doc.data().uid
                        }
                        dispatch({ type: 'DEL_TODO', payload: todoObject })
                    }
                });
            });
    }
}





export function deleteTodo(delTodo) {
    return dispatch => {
        console.log(delTodo);
        db.collection("todos").doc(delTodo.docId).delete()
            .then(function () {
                console.log("Document successfully deleted!");
            }).catch(function (error) {
                dispatch({ type: 'SHOW_ERROR', payload: error.message });
                dispatch(removeError());
            });

    }
}


export function saveEditTodoinDB(editTodo) {
    return dispatch => {
        console.log(editTodo);
        db.collection("todos").doc(editTodo.docId).update(editTodo);


    }
}