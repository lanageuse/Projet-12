import { useContext } from 'react';
import { ListingsContext } from '../context/ListingsContext';

/**
 * Hook pour accéder au contexte des listings
 * Vérifie que le contexte est disponible
 * 
 * @returns {Object} Le contexte des listings
 * @throws {Error} Si utilisé en dehors du Provider
 */
function useListings() {
  const context = useContext(ListingsContext);
  
  // Vérification que le contexte existe
  if (!context) {
    throw new Error(
      "useListings doit être utilisé dans un ListingsProvider"
    );
  }
  
  return context;
}

export default useListings;