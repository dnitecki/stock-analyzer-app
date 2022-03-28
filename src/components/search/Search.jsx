import React, { useState } from "react";
import "./Search.scss";
// import { mockSearchResults } from "../../constants/mock";
import SearchResults from "../searchResults/SearchResults";
import { searchSymbols } from "../../api/stock-api";

export default function Search() {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbols(input);
        const result = searchResults.result;
        setBestMatches(result);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
    }
  };
  return (
    <div>
      <span className="searchbar">
        <input
          type="text"
          className="input"
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
        <div className="icon">
          {input && (
            <button>
              <i className="pi pi-times clear-icon" onClick={clear} />
            </button>
          )}
        </div>
        <div className="search">
          <button onClick={updateBestMatches}>
            <i className="pi pi-search search-icon" />
          </button>
        </div>
      </span>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
}
