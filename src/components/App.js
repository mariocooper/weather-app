import React, { useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import ForecastDetails from "./ForecastDetails";
import "../styles/App.css";
import background from "../UK.jpg";

function App() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({
    city: "Manchester",
    country: "GB",
  });
  const [searchText, setSearchText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true); 
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleCitySearch = () => {
    getForecast(
      setSelectedDate,
      setForecasts,
      setLocation,
      searchText,
      setErrorMessage,
      setIsLoading
    );
  };

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    getForecast(setSelectedDate, setForecasts, setLocation, "", setErrorMessage, setIsLoading);
  }, []);
  console.log(isLoading)

  return (

    <div
      className="background-image"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="weather-app">
        <h1>Weather Forecast</h1>
        
        {isLoading ? 
                  <h2>Loading forecast for {searchText || location.city}</h2>
        :
        <>
          <LocationDetails
          city={location.city}
          country={location.country}
          errorMessage={errorMessage}
        />
        
        <SearchForm
          searchText={searchText}
          setSearchText={setSearchText}
          onSubmit={handleCitySearch}
        />
        <br />

        {!errorMessage &&  (
          <>
          
            <ForecastSummaries
              forecasts={forecasts}
              onForecastSelect={handleForecastSelect}
              isLoading={isLoading}
            />
            {selectedForecast && (
              <ForecastDetails forecast={selectedForecast} />
            )}
          </>
        )}
             </>
}       
      </div>
    </div>
  );
}

export default App;
