import useListings from './useListings';

/**
 * Hook pour récupérer un logement spécifique par son ID
 * Utilise un cache par logement pour les performances
 * 
 * @param {string} id - L'identifiant du logement
 * @returns {Object} Objet contenant property et status
 */
function useProperty(id) {
  // Vérification du cache spécifique au logement
  const cachedProperty = localStorage.getItem(`property-${id}`);
  
  // Récupération de la liste complète
  const { listings, status } = useListings();
  
  // Fonction pour trouver et cacher un logement
  const findProperty = (id) => {
    const property = listings.find((prop) => prop.id === id) || null;
    
    // Mise en cache du résultat
    localStorage.setItem(`property-${id}`, JSON.stringify(property));
    
    return property;
  };

  // Si en cache, on l'utilise, sinon on cherche
  const property = cachedProperty 
    ? JSON.parse(cachedProperty) 
    : findProperty(id);
  
  return { property, status };
}

export default useProperty;