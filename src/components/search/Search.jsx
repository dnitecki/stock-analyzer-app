import React, { useState } from "react";
import "./Search.scss";
import { mockSearchResults } from "../../constants/mock";

export default function Search() {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };
  return (
    <span className="searchbar">
      <i className="pi pi-search icon" />
      <input
        type="text"
        value={input}
        placeholder="Search stock..."
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />
      {input && (
        <button>
          <i className="pi pi-times icon" onClick={clear} />
        </button>
      )}
    </span>
  );
}
