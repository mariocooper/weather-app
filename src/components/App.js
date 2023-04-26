import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return <LocationDetails city={city} country={country} />;
}

export default App;
