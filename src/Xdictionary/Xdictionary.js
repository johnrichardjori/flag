import React, { useState } from "react";
import "./Xdictionary.css";

const dictionary = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const handleSearch = () => {
    const searchResult = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (searchResult) {
      setDefinition(searchResult.meaning);
    } else {
      setDefinition("Word not found in the dictionary.");
    }
  };

  return (
    <div className="dictionary-container">
      <h2 className="app-title">Dictionary App</h2>
      <div className="search-container">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter a word..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="definition-container">
        <h3>Definition:</h3>
        <p>{definition}</p>
      </div>
    </div>
  );
};

export default XDictionary;
