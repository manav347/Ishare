import React from "react";
import "./navbarLogin.css";
import { FaBookmark } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Diamond from '../../Assets/Images/dLogo.png';


function NavbarLogin() {

    return (
        <div id="navid">
            <nav className="navbar fixed-top navbar-expand-lg container-fluid">
                <img className="graph" src={Diamond} alt="" style={{ height: "2.5em", width: "auto" }}></img>

                <p className="navbar-brand2" href="home">Welcome to I Share</p>
                <div className="navbarx p-2">
                </div>
            </nav>

        </div>
    );
}

export default NavbarLogin;

