import React, { useState } from "react";
import { Link } from "react-router-dom";

const cities = ["Warszawa", "Kraków", "Gdańsk", "Wrocław", "Poznań"];

const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.trim() !== "") {
      const matches = cities.filter((city) =>
        city.toLowerCase().startsWith(input.toLowerCase())
      );
      setFilteredCities(matches);
    } else {
      setFilteredCities([]);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      {/* Wyszukiwarka */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Wpisz nazwę miasta"
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid white",
          background: "rgba(0, 0, 0, 0.7)",
          color: "white",
          fontFamily: "'Poppins', Arial, sans-serif",
          fontSize: "14px",
          textShadow: "1px 1px 2px black",
          width: "200px",
        }}
      />
      {/* Lista wyników */}
      {filteredCities.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            margin: "0",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          {filteredCities.map((city, index) => (
            <li
              key={index}
              style={{
                margin: "0",
              }}
            >
              <Link
                to={`/details/${city}`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "16px", // Czcionka miast
                  fontFamily: "'Poppins', Arial, sans-serif",
                  textShadow: "1px 1px 2px black",
                  display: "flex", // Flexbox dla wyśrodkowania
                  alignItems: "center", // Wyśrodkowanie pionowe
                  justifyContent: "center", // Wyśrodkowanie poziome
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid white",
                  background: "rgba(255, 255, 255, 0.1)", // Przezroczyste tło
                  width: "200px",
                  height: "40px", // Dopasowanie rozmiaru do wyszukiwarki
                }}
                onMouseEnter={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.2)")}
                onMouseLeave={(e) => (e.target.style.background = "rgba(255, 255, 255, 0.1)")}
              >
                {city}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchForm;


