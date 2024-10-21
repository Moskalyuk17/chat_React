import React from "react";
import openSideBar from "../Assect/open_sidebar.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="account"></div>
          {!this.props.isAsideVisible && (
            <button
              className="open_sidebar"
              data="Открытие боковой панели"
              onClick={this.props.openAside}
            >
              <img src={openSideBar} alt="Открытие боковой панели" />
            </button>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
