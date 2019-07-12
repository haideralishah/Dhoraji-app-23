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
            .get()
            .then(function (querySnapshot) {
                let allTodos = [];
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                    let todoObject = {
                        docId: doc.id,
                        todo: doc.data().todoInput,
                        uid: doc.data().uid
                    }
                    allTodos.push(todoObject);
                    dispatch({ type: 'ALL_TODOS', payload: allTodos })
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });


    }
}