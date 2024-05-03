// CountryApp.jsx

import React, { useState, useEffect } from "react";
import "./Countrysearch.css";

const Countrysearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch data");
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="country-app">
      <input
        type="text"
        placeholder="Search country..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="country-list">
        {filteredCountries.map((country) => (
          <div key={country.cca2} className="country-card">
            <img src={country.flags.svg} alt={country.name.common} />
            <h2>{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countrysearch;
