import { useContext, createContext, useState, useEffect } from "react";

const ListingsContext = createContext()

export function ListingsProvider({ children, props }) {
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
    }, [error, loading, listings])

    return (
        <ListingsContext.Provider value={{ listings, loading, error }} {...props}>
            {children}
        </ListingsContext.Provider>
    );
}

export function useListings() {
    const context = useContext(ListingsContext)
    if (!context) {
        throw new Error("ListingsContext n'est pas accessible dans ce composant")
    }
    return context;
}