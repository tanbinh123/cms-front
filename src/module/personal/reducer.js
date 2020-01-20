const initState = {
    original: {
        username: null,
        email: null,
        telephone: null
    },
    id: null,
    username: null,
    email: null,
    telephone: null,
    password: null,
    checkPassword: null
};

const personalReducer = (state = initState, action) => {

    if (action.type === 'personal') {
        return {
            ...state,
            ...action.state,
        };
    } else {
        return state;
    }
};

export default personalReducer;
