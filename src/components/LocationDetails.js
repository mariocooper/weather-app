import React from "react";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;
  return errorMessage ? (
    <h1>errorMessage</h1>
  ) : (
    <h1>{`${city}, ${country}`}</h1>
  );
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;
