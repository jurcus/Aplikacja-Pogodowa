import React from "react";
import { TemperatureUnitProvider } from "./TemperatureUnitContext";
import { FavoriteCitiesProvider } from "./FavoriteCitiesContext";

const Providers = ({ children }) => {
  return (
    <TemperatureUnitProvider>
      <FavoriteCitiesProvider>
        {children}
      </FavoriteCitiesProvider>
    </TemperatureUnitProvider>
  );
};

export default Providers;
