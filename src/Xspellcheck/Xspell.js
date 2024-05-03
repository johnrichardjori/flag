import React, { useState, useEffect } from 'react';
import './Xspell.css';

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [text, setText] = useState('');
  const [correction, setCorrection] = useState('');

  useEffect(() => {
    const words = text.split(' ');
    let correctionSuggestion = '';
    for (const word of words) {
      if (customDictionary[word.toLowerCase()]) {
        correctionSuggestion = `Did you mean: ${customDictionary[word.toLowerCase()]}?`;
        break;
      }
    }
    setCorrection(correctionSuggestion);
  }, [text]);

  return (
    <div className="spellcheck-container">
      <textarea
        className="spellcheck-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={6}
        cols={50}
        placeholder="Type your text here..."
      />
      <p className="correction-message">{correction}</p>
    </div>
  );
};

export default XSpellCheck;
