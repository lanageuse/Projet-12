import { createContext } from 'react';
import useFetchListings from '../hooks/useFetchListings';

const ListingsContext = createContext();
function ListingsProvider({ children }) {
  const { listings, error, status } = useFetchListings();
  return (
    <ListingsContext.Provider value={{ listings, error, status }}>
      {children}
    </ListingsContext.Provider>
  );
}

export { ListingsContext, ListingsProvider };
