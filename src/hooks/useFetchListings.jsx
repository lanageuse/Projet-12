import { useEffect, useReducer } from 'react';
import listingsReducer from './reducers/listingsReducer';
function useFetchListings() {
  const [state, dispatch] = useReducer(listingsReducer, {
    listings: [],
    error: null,
    status: 'idle',
  });

  useEffect(() => {
    const fetchData = async () => {
      const cached = localStorage.getItem('listings');
      if (cached) {
        dispatch({
          type: 'done',
          payload: JSON.parse(cached),
        });
        return;
      }
      dispatch({ type: 'fetching' });
      try {
        const res = await fetch('/data/properties.json');
        if (!res.ok) throw new Error('Erreur serveur');
        const data = await res.json();
        localStorage.setItem('listings', JSON.stringify(data.listings));
        dispatch({
          type: 'done',
          payload: data.listings,
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

export default useFetchListings;
