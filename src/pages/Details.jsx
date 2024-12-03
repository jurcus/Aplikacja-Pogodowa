import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useTemperatureUnit } from "../context/TemperatureUnitContext";

const API_KEY = "3ee55e2c93671f3b9fd6da52ffe8f657";
const API_BASE_URL = "https://api.openweathermap.org/data/2.5";

// Mapowanie warunków pogodowych na polski
const weatherConditionsPL = {
  Clear: "Czyste niebo",
  Clouds: "Zachmurzenie",
  Rain: "Deszcz",
  Snow: "Śnieg",
  Thunderstorm: "Burza",
  Drizzle: "Mżawka",
  Mist: "Mgła",
  Smoke: "Dym",
  Haze: "Zamglenie",
  Dust: "Pył",
  Fog: "Mgła",
  Sand: "Piasek",
  Ash: "Popiół",
  Squall: "Szkwał",
  Tornado: "Tornado",
};

// Funkcja do konwersji temperatury na wybraną jednostkę
const convertTemperature = (temp, unit) => {
  switch (unit) {
    case "F":
      return ((temp * 9) / 5 + 32).toFixed(1);
    case "K":
      return (temp + 273.15).toFixed(1);
    case "C":
    default:
      return temp.toFixed(1);
  }
};


const Details = () => {
  const { city } = useParams();
  const { unit, toggleUnit } = useTemperatureUnit();

  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);

        const currentWeatherResponse = await axios.get(
          `${API_BASE_URL}/weather`,
          {
            params: {
              q: city,
              units: "metric",
              appid: API_KEY,
            },
          }
        );

        const forecastResponse = await axios.get(`${API_BASE_URL}/forecast`, {
          params: {
            q: city,
            units: "metric",
            appid: API_KEY,
          },
        });

        setCurrentWeather(currentWeatherResponse.data);
        setForecast(forecastResponse.data);
      } catch (err) {
        setError("Nie udało się pobrać danych pogodowych.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) {
    return <p>Ładowanie danych pogodowych...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!currentWeather || !forecast) {
    return <p>Brak dostępnych danych pogodowych.</p>;
  }

  return (
    <div style={{ color: "white", textAlign: "center", padding: "20px" }}>
      <h2>Szczegóły pogody dla miasta {city}</h2>

      {/* Przyciski zmiany jednostek temperatur */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => toggleUnit("C")}
          style={{
            margin: "0 5px",
            padding: "10px",
            background: unit === "C" ? "rgba(255, 255, 255, 0.2)" : "none",
            border: "1px solid white",
            color: "white",
            cursor: "pointer",
          }}
        >
          Celsjusz
        </button>
        <button
          onClick={() => toggleUnit("F")}
          style={{
            margin: "0 5px",
            padding: "10px",
            background: unit === "F" ? "rgba(255, 255, 255, 0.2)" : "none",
            border: "1px solid white",
            color: "white",
            cursor: "pointer",
          }}
        >
          Fahrenheit
        </button>
        <button
          onClick={() => toggleUnit("K")}
          style={{
            margin: "0 5px",
            padding: "10px",
            background: unit === "K" ? "rgba(255, 255, 255, 0.2)" : "none",
            border: "1px solid white",
            color: "white",
            cursor: "pointer",
          }}
        >
          Kelvin
        </button>
      </div>

      <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>Obecna pogoda:</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <p style={{ margin: "5px 0" }}>
            <strong>Temperatura:</strong>{" "}
            {convertTemperature(currentWeather.main.temp, unit)}°{unit}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Warunki:</strong>{" "}
            {weatherConditionsPL[currentWeather.weather[0].main] ||
              currentWeather.weather[0].description}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Prawdopodobieństwo opadów:</strong>{" "}
            {currentWeather.rain ? "100%" : "0%"}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Rodzaj opadów:</strong>{" "}
            {currentWeather.weather[0].main === "Rain"
              ? "Deszcz"
              : currentWeather.weather[0].main === "Snow"
              ? "Śnieg"
              : "Brak"}
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Ilość opadów:</strong>{" "}
            {currentWeather.rain ? currentWeather.rain["1h"] || 0 : 0} mm
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Prędkość wiatru:</strong> {currentWeather.wind.speed} m/s
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Kierunek wiatru:</strong> {currentWeather.wind.deg}°
          </p>
          <p style={{ margin: "5px 0" }}>
            <strong>Zachmurzenie:</strong> {currentWeather.clouds.all}%
          </p>
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
          alt="Ikona pogody"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            padding: "10px",
          }}
        />
      </div>

      <h3 style={{ fontSize: "24px", marginTop: "20px" }}>Prognoza na 5 dni:</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        {forecast.list
          .filter((_, index) => index % 8 === 0)
          .map((day, index) => (
            <div className="forecast-item" key={index}>
              <p className="weather-text">
                {new Date(day.dt_txt).toLocaleDateString()}
              </p>
              <p className="weather-text">
                Temperatura: {convertTemperature(day.main.temp, unit)}°{unit}
              </p>
              <p className="weather-text">
                Warunki: {weatherConditionsPL[day.weather[0].main] ||
                  day.weather[0].description}
              </p>
              <p className="weather-text">
                Opady: {day.rain ? day.rain["3h"] : 0} mm
              </p>
              <img
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="Ikona pogody"
                className="forecast-icon"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Details;
