const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
    if (action.type === 'SEARCH_FOUCS') {
        return {
            focused: true
        };
    } else if (action.type === 'SEARCH_BLUR') {
        return {
            focused: false
        };
    } 
    return state;
}