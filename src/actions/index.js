
const moviesUpdate = (newArray) => {
    return {
        type: "MOVIES_SUCCESS",
        payload: newArray
    }
}

export {
    moviesUpdate
}