import React from "react";
import {Component} from "react";
import {NavLink} from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' aria-current="page" to='./news_list'>
                  News List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName='active' aria-current="page" to='./creat_news'>
                  Creat news
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
