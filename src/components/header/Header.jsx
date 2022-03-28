import React from "react";
import "./Header.scss";
import Search from "../search/Search";

export default function Header({ name, ticker }) {
  return (
    <>
      <div>
        <h1 className="header-text">
          {name}&nbsp;({ticker})
        </h1>
        <Search />
      </div>
    </>
  );
}
