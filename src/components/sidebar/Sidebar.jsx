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
              <div className={this.state.clicked ? "move" : "back"}>
                <i
                  className={
                    this.state.clicked
                      ? "pi pi-chevron-right"
                      : "pi pi-chevron-left"
                  }
                ></i>
              </div>
            </div>
          </div>
        </header>
        <div id="nav-bar" className={this.state.clicked ? "show" : "navbar"}>
          <nav className="nav">
            <div className="nav-list">
              <NavLink to="/" className="nav__logo" activeClassName="active">
                <i className="pi pi-home nav__logo-icon" />
                <span className="nav__name">Dashboard</span>
              </NavLink>
              <NavLink
                to="/watchlist"
                className="nav__logo"
                activeClassName="active"
              >
                <i className="pi pi-chart-bar nav__logo-icon" />
                <span className="nav__name">Watchlist</span>
              </NavLink>
              <NavLink
                to="/reportbug"
                className="nav__logo"
                activeClassName="active"
              >
                <i className="pi pi-flag nav__logo-icon" />
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
