import React, { Component } from "react";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
  state = { clicked: true };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <div>
        <header className="header" id="header">
          <div className="header__toggle" onClick={this.handleClick}>
            <div>
              <img
                className={this.state.clicked ? "move" : "back"}
                src={
                  this.state.clicked
                    ? "./assets/interface-arrows-button-right.svg"
                    : "./assets/interface-arrows-button-left.svg"
                }
                id="header-toggle"
                alt="icon"
              ></img>
            </div>
          </div>
        </header>
        <div id="nav-bar" className={this.state.clicked ? "show" : "navbar"}>
          <nav className="nav">
            <div className="nav-list">
              <NavLink to="/" className="nav__logo" activeClassName="active">
                <img
                  className="nav__logo-icon"
                  src="./assets/interface-home-3.svg"
                  alt="icon"
                ></img>
                <span className="nav__name">Dashboard</span>
              </NavLink>
              <NavLink
                to="/watchlist"
                className="nav__logo"
                activeClassName="active"
              >
                <img
                  className="nav__icon"
                  src="./assets/money-graph-bar.svg"
                  alt="icon"
                ></img>
                <span className="nav__name">Watchlist</span>
              </NavLink>
              <NavLink
                to="/reportbug"
                className="nav__logo"
                activeClassName="active"
              >
                <img
                  className="nav__icon"
                  src="./assets/travel-map-flag.svg"
                  alt="icon"
                ></img>
                <span className="nav__name">Report Bug</span>
              </NavLink>
            </div>

            {/* <a href="#" className="nav__link">
              <img
                className="nav__icon"
                src="./assets/computer-logo-linkedin.svg"
                alt="icon"
              ></img>
              <span className="nav__name">Dominick Nitecki</span>
            </a> */}
          </nav>
        </div>
      </div>
    );
  }
}
export default Sidebar;
