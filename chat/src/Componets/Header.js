import React from "react";
import openSideBar from "../Assect/open_sidebar.svg";

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="account"></div>
                    <button className="open_sidebar" data="Открытие боковой панели"><img src={openSideBar} alt="открытие боковой панели" /></button>
                </div>
            </header>
        )
    }
}

export default Header;