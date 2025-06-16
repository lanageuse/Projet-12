import { useContext, createContext, useState, useEffect } from "react";

const ListingsContext = createContext()

export function ListingsProvider({ children }) {
    const [listings, setListings] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("../data/properties.json")
            .then((res) => {
                return res.json()
            })
            .then(res => {
                setListings(res.listings)
                setLoading(false)
            })
            .catch((error) => {
                console.log("Erreur de chargement des données : ", error)
                setListings([])
                setLoading(false)
            })
    }, [])


    return (
        <ListingsContext.Provider value={{ listings, loading }}>
            {children}
        </ListingsContext.Provider>
    );
}

export function useListings() {
    return useContext(ListingsContext)
}