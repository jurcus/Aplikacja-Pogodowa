import React, { createContext, useContext, useState, useEffect } from "react";

const FavoriteCitiesContext = createContext();

export const FavoriteCitiesProvider = ({ children }) => {
  // Inicjalizacja stanu z localStorage
  const [favoriteCities, setFavoriteCities] = useState(() => {
    const storedFavorites = localStorage.getItem("favoriteCities");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  // Synchronizacja stanu z localStorage
  useEffect(() => {
    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
  }, [favoriteCities]);

  const addFavoriteCity = (city) => {
    setFavoriteCities((prev) => [...prev, city]);
  };

  const removeFavoriteCity = (city) => {
    setFavoriteCities((prev) => prev.filter((c) => c !== city));
  };

  return (
    <FavoriteCitiesContext.Provider
      value={{ favoriteCities, addFavoriteCity, removeFavoriteCity }}
    >
      {children}
    </FavoriteCitiesContext.Provider>
  );
};

export const useFavoriteCities = () => useContext(FavoriteCitiesContext);
