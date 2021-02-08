export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //TODO REMOVE after finished developing
    token: 'BQAd0pLKML05XkmM5jhTvyF4CLD6hwcLwV4zkl0OCRYZSWaoiXrm3tV5DsHAmKhq1O7OFNRMa00SNUvPRBE1wZyXZpYbcwPR4oolQzgfRebEaZb5In1OnzIaxrkCsykcOOw4vmUUuRrq4lRiXcocA_9MLSeuJ_Sk9HdqYgsf_9TyfFtl'
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> typem [payload]

    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            }
        default:
            return state;
    }
}

export default reducer;