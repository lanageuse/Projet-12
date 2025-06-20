import { useContext, createContext } from "react";
import useFetchData from "../hook/useFetchData";

const ListingsContext = createContext()
export function ListingsProvider({ children }) {
    const { listings, error, status } = useFetchData()
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