import { useListings } from "../context/ListingsContext"

function useProperty(id) {
    const { listings, status } = useListings()
    const property = listings.find(prop => prop.id === id) || null;
    return { property, status };
}

export default useProperty