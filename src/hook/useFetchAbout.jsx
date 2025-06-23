import { useEffect, useReducer } from "react";
import aboutReducer from './reducers/aboutReducer'

function useFetchAbout() {
    const [state, dispatch] = useReducer(aboutReducer, {
        data: [],
        error: null,
        status: "idle",
    })

    useEffect(() => {
        const fetchData = async () => {
            const cached = localStorage.getItem("about");
            if (cached) {
                console.log("cached")
                dispatch({
                    type: "done",
                    payload: JSON.parse(cached),
                })
                return;
            }
            dispatch({ type: "fetching" })
            try {
                const res = await fetch("/data/about.json");
                if (!res.ok) throw new Error("Erreur serveur");
                const data = await res.json()
                localStorage.setItem("about", JSON.stringify(data.aboutList))
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