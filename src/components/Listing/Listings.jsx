import ListingsGrid from "./ListingsGrid"
import { useListings } from '../../context/ListingsContext'
import Listing from "./Listing"
import { Suspense } from "react"
function Listings() {
    const { listings, loading } = useListings()
    if (loading) return 'Chargement....'
    return (
        <div className="listings">
            <ListingsGrid fallback="Chargement...">
                {listings.map((listing, index) => (
                    <Listing key={index} listing={listing} />
                )
                )}
            </ListingsGrid>
        </div>
    )
}

export default Listings