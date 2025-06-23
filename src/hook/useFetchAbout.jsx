import { useEffect, useReducer, useRef } from "react";
import aboutReducer from './reducers/aboutReducer'

function useFetchAbout() {
    const cache = useRef(null);
    const [state, dispatch] = useReducer(aboutReducer, {
        data: [],
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
                const res = await fetch("/data/about.json");
                if (!res.ok) throw new Error("Erreur serveur");
                const data = await res.json()
                cache.current = data.aboutList
                dispatch({
                    type: "done",
                    payload: data.aboutList || []
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

export default useFetchAbout