import { useEffect, useReducer } from 'react';
import listingsReducer from './reducers/listingsReducer';

/**
 * Hook pour charger les listings de logements
 * Gère le cache localStorage et les états de chargement
 * 
 * @returns {Object} État contenant listings, error et status
 */
function useFetchListings() {
  // Gestion du state avec useReducer
  const [state, dispatch] = useReducer(listingsReducer, {
    listings: [],
    error: null,
    status: 'idle',
  });

  useEffect(() => {
    const fetchData = async () => {
      // Vérification du cache avant la requête
      const cached = localStorage.getItem('listings');
      if (cached) {
        dispatch({
          type: 'done',
          payload: JSON.parse(cached),
        });
        return;
      }

      // Début du chargement
      dispatch({ type: 'fetching' });
      
      try {
        // Récupération des données
        const res = await fetch('/data/properties.json');
        if (!res.ok) throw new Error('Erreur serveur');
        
        const data = await res.json();
        
        // Mise en cache pour les prochaines visites
        localStorage.setItem('listings', JSON.stringify(data.listings));
        
        // Mise à jour du state avec les données
        dispatch({
          type: 'done',
          payload: data.listings,
        });
      } catch (err) {
        // Gestion des erreurs
        dispatch({
          type: 'fail',
          error: err,
        });
      }
    };
    
    fetchData();
  }, []); // Exécution unique au montage
  
  return state;
}

export default useFetchListings;