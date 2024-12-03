import React, { createContext, useContext, useState, useEffect } from "react";
import { TEMPERATURE_UNITS } from "../constants/temperatureUnits";

const TemperatureUnitContext = createContext();

export const TemperatureUnitProvider = ({ children }) => {
  // Inicjalizacja stanu z localStorage
  const [unit, setUnit] = useState(() => {
    const storedUnit = localStorage.getItem("temperatureUnit");
    return storedUnit && TEMPERATURE_UNITS.isValid(storedUnit)
      ? storedUnit
      : TEMPERATURE_UNITS.CELSIUS; // Domyślna jednostka
  });

  // Synchronizacja stanu z localStorage
  useEffect(() => {
    localStorage.setItem("temperatureUnit", unit);
  }, [unit]);

  const toggleUnit = (newUnit) => {
    if (TEMPERATURE_UNITS.isValid(newUnit)) {
      setUnit(newUnit);
    }
  };

  return (
    <TemperatureUnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </TemperatureUnitContext.Provider>
  );
};

export const useTemperatureUnit = () => useContext(TemperatureUnitContext);
