// CountryApp.js

import React, { useState, useEffect } from "react";
import "./Countrysearch.css"; // Import CSS for styling

function Countrysearch() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="country-app">
      <h1>Country Flags & Names</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="country-list">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <div className="countryCard" key={index}>
              <img src={country.flags.png} alt={country.name.common} />
              <h2>{country.name.common}</h2>
            </div>
          ))
        ) : (
          <p>No matching countries found.</p>
        )}
      </div>
    </div>
  );
}

export default Countrysearch;
