
const INITIAL_STATES = {
    username: 'Haider ali shah',
    rollnumber: 2643,
    institute: 'dhoraji',
    course: 'Mobile and Web Application Development',
    pakInSemifinal: false,
    loader: false,
    email: '',
    uid: '',
    errorMessage: '',
    showError: false,
    allTodos: []
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

        case "SHOW_ERROR":
            return ({
                ...state,
                showError: true,
                errorMessage: action.payload
            })
        case "REMOVE_ERROR":
            return ({
                ...state,
                showError: false,
                errorMessage: ''
            })
        case "ALL_TODOS":

            return ({
                ...state,
                allTodos: action.payload

            })




        default:
            return state;

    }

}