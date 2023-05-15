import React from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";

import "../styles/App.css";
import ForecastDetails from "./ForecastDetails";

function App({ location, forecasts }) {
  const { city, country } = location;

  return (
    <div className="weather-app">
      <LocationDetails city={city} country={country} />
      <ForecastSummaries forecasts={forecasts} />
      <ForecastDetails forecast={forecasts[0]} />
    </div>
  );
}

export default App;
