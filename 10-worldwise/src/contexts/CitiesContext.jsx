import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

const BASE_URL = "http://localhost:8000";

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return { ...state, isLoading: false, cities: action.payload };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload
      };

    case "city/deleted":
      return { ...state, isLoading: false, cities: state.cities.filter(city => city.id !== action.payload)};

    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("Unknown action type");
  }
}

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchCities = async () => {
      try {
        // setIsLoading(true);
        dispatch({ type: "loading" });
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        console.log(data);
        // setCities(data);
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        dispatch({
          type: "rejected",
          payload: `There was an error loading cities...${error}`,
        });
      }
    };

    fetchCities();
  }, []);

  // Fetching city info from our fake API
  async function getCity(id) {
    if(id === currentCity.id) return;

    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities/${id}`);
      const data = await res.json();
      // console.log(data);
      // setCurrentCity(data);
      dispatch({ type: "city/loaded", payload: data });
      console.log(currentCity);
    } catch (error) {
      dispatch({
        type: "rejected",
        payload: `There was an error loading city...${error}`,
      });
    }
  }

  // Adding a new city to our fake API
  async function postCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // setCities((cities) => [...cities, data]);
      dispatch({ type: "city/created", payload: data });
    } catch (error) {
      dispatch({ type: 'rejected', payload: `There was an error adding new city...${error}`});
    }
  }

  // Deleting a new city to our fake API
  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      await fetch(`${BASE_URL}/cities/${id}`, {
        method: "DELETE",
      });
      // setCities((cities) => cities.filter((city) => city.id !== id));
      dispatch({ type: 'city/deleted', payload: id});
    } catch (error) {
      dispatch({ type: 'rejected', payload: `There was an error deleting city...${error}`});
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        postCity,
        deleteCity,
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
