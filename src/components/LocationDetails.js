import React from "react";

function LocationDetails(props) {
  const { city, country, errorMessage } = props;

  // If there's an error, show the error
  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  // If everything's fine, show the location details
  return <h1>{`${city}, ${country}`}</h1>;
}

LocationDetails.defaultProps = {
  errorMessage: "",
};

export default LocationDetails;
