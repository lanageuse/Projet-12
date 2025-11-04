import ListingsGrid from './ListingsGrid';
import Listing from './Listing';
import ErrorMessage from '../ErrorMessage';
import useListings from '../../hooks/useListings';

function Listings() {
  const { listings, status, error } = useListings();
  if (status === 'fetching') return '<p>Chargement...</p>';

  return (
    <div className="listings">
      <ErrorMessage error={error} />
      {!error && (
        <ListingsGrid ListingsGrid fallback="Chargement...">
          {listings.map((listing, index) => (
            <Listing key={index} listing={listing} />
          ))}
        </ListingsGrid>
      )}
    </div>
  );
}

export default Listings;
