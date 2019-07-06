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

export function signup(email, password) {
    return (dispatch) => {
        console.log(email, password);
        dispatch({ type: 'CHANGE_LOADER' })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                dispatch({ type: 'CHANGE_LOADER' });
                dispatch({ type: 'LOGGEDIN_USER', payload: { email: user.user.email, uid: user.user.uid } })
                Apphistory.push('./home');


            })
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
                Apphistory.push('./todos');


            })
    }
}