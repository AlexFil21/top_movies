const initialArray = {
    movies: []
}

const reducer = (state = initialArray, action) => {
    
    switch(action.type) {
        case "MOVIES_SUCCESS":
            return {
                movies: action.payload
            }

        default:
            return state
    }
}

export default reducer