function callAPIs() {
    // fetch('http://localhost:3000/dummyAPI', { mode: 'no-cors' })
    //     .then((response) => {
    //         console.log(response)
    //         return response.text()
    //     })
    //     .then((data) => {
    //         console.log(data);
    //     })





    var newUser = {
        email: 'xyz@dhoraji.com',
        password: '123456',
        userName: 'Dhoraji Learners'
    };
    fetch('http://localhost:3000/createUser', {
        method: "post",
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(newUser), mode: 'no-cors'
    })
        .then((response) => {
            console.log(response,'response')
        })







}