/*Registration and Signin*/


firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {

    })

firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {

    })




/*Save to DB*/
firebase.firestore().collection("collectionName").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })











/*get data from DB at once*/

db.collection("collectionName").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});


db.collection("collectionName").where("uid", "==", specificUid)
    .get()
    .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function (error) {
        console.log("Error getting documents: ", error);
    });









/*get data from DB at realtime*/

db.collection("collectionName").where("uid", "==", specificUid)
    .onSnapshot(function (todoSnapshot) {
        todoSnapshot.docChanges().forEach(function (change) {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });


/*delete data from DB*/

db.collection("collectionName").doc("docId").delete()
    .then(function () {
        console.log("Document successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });


/*MODIFY data from DB*/

db.collection("collectionName").doc("docId").update({ foo: 'bar' });