import React, { useState } from "react";
import "./Search.scss";
import { mockSearchResults } from "../../constants/mock";
import { XIcon, SearchIcon } from "@heroicons/react/solid";

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
    <div>
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
      ></input>
      <button>
        <XIcon />
      </button>
    </div>
  );
}
