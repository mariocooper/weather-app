import React from "react";
import ForecastSummary from "./ForecastSummary";

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
      <div className="forecast-details__temperature-max">
        High: {temperature.max}&deg;C
      </div>
      <div className="forecast-details__temperature-min">
        Low: {temperature.min}&deg;C
      </div>
      <div className="forecast-details__wind-speed">{wind.speed}mph</div>
      <div className="forecast-details__wind-direction">{wind.direction}</div>
      <div className="forecast-details__humidity">{humidity}</div>
    </div>
  );
}

export default ForecastDetails;
