import "../styles/App.css";
import React from "react";
import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;
  return (
    <div className="App">
      <LocationDetails city={city} country={country} />;
    </div>
  );
}

export default App;
