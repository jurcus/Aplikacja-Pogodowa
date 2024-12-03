import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"; // Strona główna
import Details from "./pages/Details"; // Strona szczegółów
import Favorites from "./pages/Favorites"; // Strona Ulubione Miasta
import SearchForm from "./components/SearchForm"; // Formularz wyszukiwania
import Providers from "./context/Providers"; // Nasz nowy komponent Providers
import DateTimeDisplay from "./components/DateTimeDisplay"; // Import komponentu DateTimeDisplay

const App = () => {
  return (
    <Providers>
      <Router>
        <DateTimeDisplay /> {/* Dodanie komponentu DateTimeDisplay */}
        <Routes>
          {/* Strona główna */}
          <Route
            path="/"
            element={
              <div>
                <header style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
                  <SearchForm /> {/* Formularz wyświetlany na stronie głównej */}
                </header>
                <Home />
              </div>
            }
          />

          {/* Strona szczegółów */}
          <Route
            path="/details/:city"
            element={
              <div>
                <header style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
                  <h1>Aplikacja Pogodowa</h1>
                </header>
                <Details />
              </div>
            }
          />

          {/* Strona Ulubione Miasta */}
          <Route
            path="/favorites"
            element={
              <div>
                <header style={{ textAlign: "center", marginBottom: "20px", color: "white" }}>
                  <h1>Ulubione Miasta</h1>
                </header>
                <Favorites />
              </div>
            }
          />
        </Routes>
      </Router>
    </Providers>
  );
};

export default App;
