const hideContentReducer = (state, action) => {
    switch (action.type) {
        case 'SHOW':
            return action.visable = true
        case 'TOGGLE':
            return action.visable ? false : true
        case 'SHOW_BANNER':
            return action.visable = true
        case 'HIDE_BANNER':
            return action.visable = false
        case 'TOGGLE_BANNER':
            return action.visable ? false : true
        default:
            return state
    }
};
export { hideContentReducer as default };