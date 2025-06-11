import ListingsGrid from "./ListingsGrid"
import useListings from '../hook/useListings'
import Listing from "./Listing"
function Listings() {
    const listings = useListings()
    if (!listings) return
    console.log(listings);
    return (
        <div className="listings">
            <ListingsGrid>
                {listings.map((listing) => (
                    <Listing listing={listing} />
                )
                )}
            </ListingsGrid>
        </div>
    )
}

export default Listings