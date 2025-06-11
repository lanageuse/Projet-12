import { useEffect, useState } from "react"

function useListings() {
    const [listings, setListings] = useState(null)

    useEffect(() => {
        fetch("../data/properties.json")
            .then((res) => res.json())
            .then(res => setListings(res.listings))
    }, [])

    return listings;
}

export default useListings