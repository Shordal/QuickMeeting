const hideContentReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return action.visable = true
        case 'TOGGLE':
            return action.visable ? false : true
        default:
            return state
    }
};

export { hideContentReducer as default };