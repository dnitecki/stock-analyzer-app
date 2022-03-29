import React from "react";
import "./Header.scss";
import Search from "../search/Search";

export default function Header({ logo, name, ticker }) {
  return (
    <div className="header-container">
      <h1 className="header-text">
        <div className="logo-container">
          <img className="header-logo" src={logo} alt={name} />
        </div>
        {name}&nbsp;({ticker})
      </h1>
      <Search />
    </div>
  );
}
