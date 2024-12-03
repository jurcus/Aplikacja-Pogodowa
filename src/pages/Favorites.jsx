import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFavoriteCities } from "../context/FavoriteCitiesContext";
import "./Favorites.css";

const Favorites = () => {
  const { favoriteCities, addFavoriteCity, removeFavoriteCity } = useFavoriteCities();

  const cities = [
    { id: 1, name: "Warszawa" },
    { id: 2, name: "Kraków" },
    { id: 3, name: "Gdańsk" },
    { id: 4, name: "Wrocław" },
    { id: 5, name: "Poznań" },
  ];

  // useState: Stan filtrowanych miast
  const [filter, setFilter] = useState(""); // Przechowywanie tekstu do filtrowania
  const [filteredCities, setFilteredCities] = useState(cities); // Filtrowane miasta

  // useEffect: Aktualizowanie listy miast na podstawie filtra
  useEffect(() => {
    setFilteredCities(
      cities.filter((city) =>
        city.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, cities]);

  // useCallback: Funkcja toggleFavorite zapamiętana dla lepszej wydajności
  const toggleFavorite = useCallback(
    (cityName) => {
      if (favoriteCities.includes(cityName)) {
        removeFavoriteCity(cityName);
      } else {
        addFavoriteCity(cityName);
      }
    },
    [favoriteCities, addFavoriteCity, removeFavoriteCity]
  );

  // useMemo: Zapamiętanie liczby ulubionych miast
  const favoriteCount = useMemo(() => favoriteCities.length, [favoriteCities]);

  return (
    <div className="favorites-container">

      {/* Pole do filtrowania miast */}
      <input
        type="text"
        placeholder="Filtruj miasta..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-input"
      />
      
      {/* Wyświetlanie liczby ulubionych miast */}
      {favoriteCount === 0 ? (
        <p className="no-favorites">Nie dodano jeszcze żadnych ulubionych miast.</p>
      ) : (
        <div className="favorite-list">
          <span>Twoje ulubione miasta: </span>
          <span className="favorite-text">
            {favoriteCities.join(", ")} {/* Dodanie spacji po przecinku */}
          </span>
        </div>
      )}

      {/* Lista miast */}
      <div className="city-list">
        {filteredCities.map((city) => (
          <div key={city.id} className="city-card">
            <span>{city.name}</span>
            <button
              className="favorite-button"
              onClick={() => toggleFavorite(city.name)}
              aria-label={`Dodaj ${city.name} do ulubionych`}
            >
              {favoriteCities.includes(city.name) ? "★" : "☆"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;

