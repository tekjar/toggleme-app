export default (state = null, action) => {
    // console.log(action);
    switch (action.type) {
        case 'press_device':
            return action.payload;
        default:
            return state;
    }
};
