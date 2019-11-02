import {jsonCopy} from "../../util";

const initialState = {
    user: {
        name: "Fedor",
        age: 34,
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'NEW_USER_NAME':
        case 'NEW_NAME_REQUEST_COMPLETE':
            const newState = jsonCopy(state);

            newState.user.name = action.name;

            return newState;
        default:
            return state;
    }
}
