/* eslint-disable no-console */
import axios from "axios";

const getForecast = (
  setSelectedDate,
  setForecasts,
  setLocation,
  searchText,
  setErrorMessage,
  setIsLoading
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";
  setIsLoading(true);

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      axios
        .get(endpoint)
        .then((response) => {
          console.log("Request succeeded");

          setSelectedDate(response.data.forecasts[0].date);
          setForecasts(response.data.forecasts);
          setLocation(response.data.location);
          setIsLoading(false);
          resolve(response); // Resolve the promise with the response
        })
        .catch((error) => {
          const { status } = error.response;
          if (status === 404) {
            setErrorMessage("No such town or city, try again!");
            console.log("Location is not valid", error);
          }
          if (status === 500) {
            setErrorMessage("Oops, server error, try again later.");
            console.log("Server error", error);
          }
          reject(error); // Reject the promise with the error
        });
    }, 2000); // 2000 ms (2 seconds) delay
  });
};

export default getForecast;
