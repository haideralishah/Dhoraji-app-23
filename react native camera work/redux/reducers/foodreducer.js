
const INITIAL_STATES = {
    breakFast: "Tende Parathe",
    lunch: "Bhindi Chawal",
    dinner: "bengan karela"
}

export default function (state = INITIAL_STATES, action) {

    switch (action.type) {
        case "CHANGE_BREAKFAST":
            return ({
                ...state,
                breakFast: action.payload
            })
        case "CHANGE_LUNCH":
            return({
                ...state,
                lunch: action.payload
            })
        default:
            return state;
    }

}