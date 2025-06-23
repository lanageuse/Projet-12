import { useEffect, useReducer, useRef } from "react";
import listingsReducer from './reducers/listingsReducer'
function useFetchListings() {
    const cache = useRef(null);
    const [state, dispatch] = useReducer(listingsReducer, {
        listings: null,
        error: null,
        status: "idle",
    })

    useEffect(() => {
        const fetchData = async () => {
            if (cache.current) {
                dispatch({
                    type: "done",
                    payload: cache.current
                })
                return;
            }
            dispatch({ type: "fetching" })
            try {
                const res = await fetch("../data/properties.json");
                if (!res.ok) throw new Error("Erreur serveur");
                const data = await res.json()
                cache.current = data.listings
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