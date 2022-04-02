import React, { Component } from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  state = { clicked: false };

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
                    ? "./assets/interface-delete-1.svg"
                    : "./assets/interface-setting-menu-1.svg"
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
              <Link to="/" className="nav__logo">
                <img
                  className="nav__logo-icon"
                  src="./assets/interface-home-3.svg"
                  alt="icon"
                ></img>
                <span className="nav__name">Dashboard</span>
              </Link>
              <Link to="/watchlist" className="nav__logo">
                <img
                  className="nav__icon"
                  src="./assets/money-graph-bar.svg"
                  alt="icon"
                ></img>
                <span className="nav__name">Watchlist</span>
              </Link>
              <Link to="/reportbug" className="nav__logo">
                <img
                  className="nav__icon"
                  src="./assets/travel-map-flag.svg"
                  alt="icon"
                ></img>
                <span className="nav__name">Report Bug</span>
              </Link>
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
