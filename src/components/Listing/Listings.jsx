import ListingsGrid from "./ListingsGrid"
import useListings from '../../hook/useListings'
import Listing from "./Listing"
function Listings() {
    const listings = useListings()
    if (!listings) return
    return (
        <div className="listings">
            <ListingsGrid>
                {listings.map((listing, index) => (
                    <Listing key={index} listing={listing} />
                )
                )}
            </ListingsGrid>
        </div>
    )
}

export default Listings