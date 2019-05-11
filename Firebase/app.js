


function createUser() {
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
        .then((user) => {
            console.log('user created');
            saveUserDetails(userEmail, phone, dob, user.user.uid);
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
}

function saveUserDetails(email, phone, dob, uid) {
    console.log(email, phone, dob, uid)
    firebase.firestore().collection("users").doc(uid).set({
        userEmail: email,
        userPhone: phone,
        dob: dob,
        userUid: uid

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
}













// var db = firebase.firestore();



// db.collection("users").add({
//     firstName: 'haider',
//     lastName: 'ali',
//     phone: '03413542800'
// })
//     .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//         console.error("Error adding document: ", error);
//     });




// db.collection("users").doc('userdetails').set({
//     firstName: 'haider',
//     lastName: 'ali',
//     phone: '03413542800'
// })
//     .then(function (docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function (error) {
//         console.error("Error adding document: ", error);
//     });










function signin() {
    var userEmail = document.getElementById('email').value;
    var userPassword = document.getElementById('password').value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
        .then((user) => {
            console.log(user);
            // window.location = './home.html';
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

}





















function sendResetEmail() {
    var userEmail = document.getElementById('email').value;


    firebase.auth().sendPasswordResetEmail(userEmail)
        .then(() => {
            document.getElementById('reset-message').innerHTML = 'Reset password link is sent on email.'
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

}