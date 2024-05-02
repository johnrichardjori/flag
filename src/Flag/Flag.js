import "./Flag.css";

import React, { useState, useEffect } from "react";

function Flag() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>Countries Flags</h1>
      <div className="countries-container">
        {countries.map((country) => (
          <div key={country.name.common} className="country">
            <img
              src={country.flags.svg}
              alt={`Flag of ${country.name.common}`}
            />
            <p>{country.name.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flag;
