
const INITIAL_STATES = {
    username: 'Haider ali shah',
    rollnumber: 2643,
    institute: 'dhoraji',
    course: 'Mobile and Web Application Development',
    pakInSemifinal: false,
    loader: false,
    email: '',
    uid:''
}

export default (state = INITIAL_STATES, action) => {

    switch (action.type) {
        case "CHANGE_USERNAME":
            return ({
                ...state,
                username: action.payload,
                pakInSemifinal: !state.pakInSemifinal
            })

        case "CHANGE_LOADER":
            return ({
                ...state,
                loader: !state.loader
            })

        case "LOGGEDIN_USER":
            return ({
                ...state,
                email: action.payload.email,
                uid: action.payload.uid
            })

        default:
            return state;

    }

}