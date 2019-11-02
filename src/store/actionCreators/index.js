export function setName(name) {
    return {
        type: 'NEW_USER_NAME',
        name: name,
    }
}

export function loadName(name) {
    return (dispatch) => {

        dispatch({
            type: 'NEW_NAME_REQUEST'
        });

        setTimeout(() => {
            dispatch({
                type: 'NEW_NAME_REQUEST_COMPLETE',
                name: name,
                }
            )
        }, 2000)
    }
}