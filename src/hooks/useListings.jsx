import { useContext } from 'react';
import { ListingsContext } from '../context/ListingsContext';

function useListings() {
  const context = useContext(ListingsContext);
  if (!context) {
    throw new Error("ListingsContext n'est pas accessible dans ce composant");
  }
  return context;
}

export default useListings;
