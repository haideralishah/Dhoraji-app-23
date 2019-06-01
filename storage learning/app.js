var fireStorage = firebase.storage();


/*function to save picture to DB*/

function savePicture() {
    var image = document.getElementById('dp').files[0]
    console.log(image);

    var storageRef = fireStorage.ref().child(`images/${image.name}`);
    storageRef.put(image)
        .then(function (imageSnapshot) {
            imageSnapshot.ref.getDownloadURL()
                .then(function (downloadURL) {
                    console.log('File available at', downloadURL);
                    document.getElementById('example').src = downloadURL;
                });
        });

}