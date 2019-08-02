


export function changeBreakfast() {
    return dispatch => {
        dispatch({ type: 'CHANGE_BREAKFAST', payload: "Halwa Puri" });
    }
}

export function changeLunch(){
    return dispatch =>{
        dispatch({ type: 'CHANGE_LUNCH', payload: "Ghosia ki Nalli Biryani" })

    }
}