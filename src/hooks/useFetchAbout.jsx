import { useEffect, useReducer } from 'react';
import aboutReducer from './reducers/aboutReducer';

/**
 * Hook pour charger les données de la page À propos
 * Utilise le cache localStorage comme useFetchListings
 * 
 * @returns {Object} État contenant data, error et status
 */
function useFetchAbout() {
  // Gestion du state avec useReducer
  const [state, dispatch] = useReducer(aboutReducer, {
    data: [],
    error: null,
    status: 'idle',
  });

  useEffect(() => {
    const fetchData = async () => {
      // Vérification du cache
      const cached = localStorage.getItem('about');
      if (cached) {
        dispatch({
          type: 'done',
          payload: JSON.parse(cached),
        });
        return;
      }

      // Chargement des données
      dispatch({ type: 'fetching' });
      
      try {
        const res = await fetch('/data/about.json');
        if (!res.ok) throw new Error('Erreur serveur');
        
        const data = await res.json();
        
        // Mise en cache
        localStorage.setItem('about', JSON.stringify(data.aboutList));
        
        // Mise à jour du state
        dispatch({
          type: 'done',
          payload: data.aboutList || [],
        });
      } catch (err) {
        dispatch({
          type: 'fail',
          error: err,
        });
      }
    };
    
    fetchData();
  }, []);
  
  return state;
}

export default useFetchAbout;