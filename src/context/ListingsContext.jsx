import { useContext, createContext } from "react";
import useFetchListings from "../hook/useFetchListings";

const ListingsContext = createContext()
export function ListingsProvider({ children }) {
    const { listings, error, status } = useFetchListings()
    return (
        <ListingsContext.Provider value={{ listings, error, status }}>
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