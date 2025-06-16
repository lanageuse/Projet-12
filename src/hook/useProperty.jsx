import { useListings } from "../context/ListingsContext"

function useProperty(id) {
    const { listings, loading } = useListings()
    const property = listings.find(prop => prop.id === id) || null;
    return { property, loading };
}

export default useProperty