import React, { useState } from "react";
import "./Search.scss";
// import { mockSearchResults } from "../../constants/mock";
import SearchResults from "../searchResults/SearchResults";
import { searchSymbols } from "../../api/stock-api";

export default function Search() {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    setIsLoading(true);
    try {
      if (input) {
        const searchResults = await searchSymbols(input);
        const result = searchResults.result;
        setBestMatches(result);
        setIsLoading(false);
      }
    } catch (error) {
      setBestMatches([]);
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <div className="searchbar-container">
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
                <img
                  src="./assets/interface-delete-1.svg"
                  alt=""
                  className="clear-icon"
                  onClick={clear}
                />
              </button>
            )}
          </div>
          <div className="search">
            <button onClick={updateBestMatches}>
              <img
                src="./assets/interface-search.svg"
                alt=""
                className="search-icon"
              />
            </button>
          </div>
        </span>
        <div className="spinner">
          {isLoading ? <div className="progress-spinner"></div> : null}
        </div>
      </div>
      {input && bestMatches.length > 0 ? (
        <SearchResults results={bestMatches} />
      ) : null}
    </div>
  );
}
