import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastDetails.css";

function ForecastDetails({ forecast }) {
  const { temperature, humidity, wind } = forecast;
  return (
    <div className="forecast-details">
      <div className="forecast-details__date">
        {ForecastSummary.formattedDate}
      </div>
      <div className="forecast-details__description">
        {ForecastSummary.description}
      </div>
      <div className="forecast-details__icon">{ForecastSummary.icon}</div>
      <div className="more-details">
        <div>Temperature:</div>
        <div className="forecast-details__temperature-max">
          High: {temperature.max}&deg;C
        </div>
        <div className="forecast-details__temperature-min">
          Low: {temperature.min}&deg;C
        </div>
        <br />
        <div>Wind:</div>
        <div className="forecast-details__wind-speed">
          Speed: {wind.speed}mph
        </div>
        <div className="forecast-details__wind-direction">
          Direction: {wind.direction}
        </div>
        <br />
        <br />
        <div className="forecast-details__humidity">Humidity: {humidity}%</div>
      </div>
    </div>
  );
}

export default ForecastDetails;
