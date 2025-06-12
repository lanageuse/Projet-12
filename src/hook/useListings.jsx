import { useEffect, useState } from "react"

function useListings() {
    const [listings, setListings] = useState([])

    useEffect(() => {
        fetch("../data/properties.json")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erreur réseau")
                }
                return res.json()
            })
            .then(res => setListings(res.listings))
            .catch(() => setListings([]))
    }, [])

    return listings;
}

export default useListings