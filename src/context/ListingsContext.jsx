import { useContext, createContext, useState, useEffect } from "react";

const ListingsContext = createContext()

export function ListingsProvider({ children }) {
    const [listings, setListings] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("");

    useEffect(() => {
        let isMounted = true
        const fetchData = async () => {
            try {
                const res = await fetch("../data/properties.json");
                if (!res.ok) throw new error("Erreur serveur");
                const data = await res.json()
                if (isMounted) {
                    setListings(data.listings)
                    setLoading(false)
                }
            } catch (err) {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            }
        }
        fetchData()
        return () => {
            isMounted = false
        }
    }, [error])



    return (
        <ListingsContext.Provider value={{ listings, loading, error }}>
            {children}
        </ListingsContext.Provider>
    );
}

export function useListings() {
    return useContext(ListingsContext)
}