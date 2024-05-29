import { useState, useEffect, createContext } from "react";

const BASE_URL = "http://localhost:8000";

const CitiesContext = createContext();

function CitiesProvider({children}){
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return <CitiesContext.Provider value={{
    cities, isLoading
  }}>
    {children}
  </CitiesContext.Provider>
}

export { CitiesProvider };
