import React from "react";
import "./Header.scss";
import Search from "../search/Search";

export default function Header({ name }) {
  return (
    <>
      <div>
        <h1 className="header-text">{name}</h1>
        <Search />
      </div>
    </>
  );
}
