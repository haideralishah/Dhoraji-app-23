function callAPIs() {
    // fetch('http://localhost:3000/dummyAPI/')
    //     .then((response) => {
    //         console.log(response)
    //         return response.json()
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })





    var newUser = {
        email: 'xyzhgh@dhoraji.com',
        password: '123456',
        userName: 'Dhoraji New Learners'
    };
    fetch('http://localhost:3000/createUser', {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newUser)
    })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
        })






}