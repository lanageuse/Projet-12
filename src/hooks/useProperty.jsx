import useListings from './useListings';

function useProperty(id) {
  const cachedProperty = localStorage.getItem(`property-${id}`);
  const { listings, status } = useListings();
  const findProperty = (id) => {
    const property = listings.find((prop) => prop.id === id) || null;
    localStorage.setItem(`property-${id}`, JSON.stringify(property));
    return property;
  };

  const property = cachedProperty ? JSON.parse(cachedProperty) : findProperty(id);
  return { property, status };
}

export default useProperty;
