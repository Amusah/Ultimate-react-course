import { useState, useEffect, createContext, useContext } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log(data);
        setCities(data);
        console.log(cities);
      } catch (error) {
        console.log(`There was an error loading data...${error}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  // Fetching city info
  async function getCity(id) {
    try {
      setIsLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      console.log(data);
      setCurrentCity(data);
      console.log(currentCity);
    } catch (error) {
      console.log(`There was an error loading data...${error}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const contextValue = useContext(CitiesContext);

  // Assertion to ensure context is used in the right scope
  if (contextValue === undefined)
    throw new Error(
      "Improper use of context: cities context was used in a scope outside the cities provider"
    );
  return contextValue;
}

export { CitiesProvider, useCities };
