import { useEffect, useReducer } from "react";
import listingsReducer from './reducers/listingsReducer'
function useFetchListings() {
    const [state, dispatch] = useReducer(listingsReducer, {
        listings: null,
        error: null,
        status: "fetching",
    })

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: "fecthing" })
            try {
                const res = await fetch("../data/properties.json");
                if (!res.ok) throw new Error("Erreur serveur");
                const data = await res.json()
                dispatch({
                    type: "done",
                    payload: data.listings
                })
            } catch (err) {
                dispatch({
                    type: "fail",
                    error: err
                })
            }
        }
        fetchData()
    }, [])
    return state
}

export default useFetchListings