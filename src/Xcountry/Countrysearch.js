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
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries data:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
      <div className="countries">
        {filteredCountries.map((country) => (
          <div key={country.name.common} className="country-card">
            <img src={country.flags.svg} alt={country.name.common} />
            <span>{country.name.common}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countrysearch;
