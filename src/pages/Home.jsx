import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const cities = [
    { id: 1, name: "Warszawa" },
    { id: 2, name: "Kraków" },
    { id: 3, name: "Gdańsk" },
    { id: 4, name: "Wrocław" },
    { id: 5, name: "Poznań" },
    {
      id: 6,
      name: (
        <>
          <span className="favorites-icon">★</span> Ulubione Miasta <span className="favorites-icon">★</span>
        </>
      ),
      link: "/favorites",
    },
  ];

  return (
    <div>
      <h1>Aplikacja Pogodowa</h1>
      <h2>Lista miast</h2>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link to={city.link || `/details/${city.name}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
