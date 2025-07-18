
function listingsReducer(state, action) {
    switch (action.type) {
        case "fetching":
            return { status: "fetching", listings: null, error: null }
        case "done":
            return { status: "done", listings: action.payload, error: null }
        case "fail":
            return { status: "fail", listings: null, error: action.error }
        default:
            throw new Error("action inconnu ! : ", action.type)
    }
}

export default listingsReducer;