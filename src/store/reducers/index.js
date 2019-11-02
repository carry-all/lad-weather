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
            const newState = jsonCopy(state);

            newState.user.name = action.name;

            return newState;
        default:
            return state;
    }
}
