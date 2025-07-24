import { createContext, useContext, useState, useEffect } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const result = await fetch("http://localhost:9000/cities");
        const data = await result.json();
        setCities(data);
      } catch (error) {
        alert("Fetching of cities failed");
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);

  async function getCity(id) {
    try {
      setIsLoading(true);
      const result = await fetch(`http://localhost:9000/cities/${id}`);
      const data = await result.json();
      setCurrentCity(data);
    } catch (error) {
      alert("Fetching of city failed");
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    try {
      setIsLoading(true);
      const result = await fetch(`http://localhost:9000/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        "Content-Type": "application/json",
      });
      const data = await result.json();
      setCities((oldCities) => [...oldCities, data]);
    } catch (error) {
      alert("Adding of city failed");
    } finally {
      setIsLoading(false);
    }
  }

    async function deleteCity(id) {
    try {
      setIsLoading(true);
      await fetch(`http://localhost:9000/cities/${id}`, {method: "DELETE"});
      setCities((cities) => cities.filter((city)=> city.id!==id));
    } catch (error) {
      alert("Deeleting of city failed");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, isLoading, currentCity, getCity, createCity, deleteCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  return context;
}

export { CitiesProvider, useCities };
