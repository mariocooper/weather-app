import React from "react";
import iconData from "../data/iconData.json";

function ForecastSummary(props) {
  const { date, description, icon, temperature, onSelect } = props;
  const weatherCode = icon > 800 ? "80x" : `${icon.slice(0, 1)}00`;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-summary" data-testid="forecast-summary">
      <div className="forecast-summary__date">{formattedDate}</div>
      <div className="forecast-summary__icon" data-testid="forecast-icon">
        <img src={iconData[weatherCode]} alt="Forecast Icon" />
      </div>
      <div className="forecast-summary__description">{description}</div>
      <div className="forecast-summary__temperature">
        {temperature.max}&deg;C
      </div>
      <br />
      <button type="button" onClick={() => onSelect(date)}>
        More Details
      </button>
    </div>
  );
}

export default ForecastSummary;
