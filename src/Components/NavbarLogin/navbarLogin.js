import React from "react";
import "./navbarLogin.css";
import { FaBookmark } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Diamond from '../../Assets/Images/dLogo.png';
import Police from '../../Assets/Images/Pune police.png';


function NavbarLogin() {

    return (
        <div id="navid">
            <nav className="navbar fixed-top navbar-expand-lg container-fluid">
                <img className="graph" src={Police} alt="" style={{ height: "3.5em", width: "auto" }}></img>

                <p className="navbar-brand2" href="home">    Safety H-Shield</p>
                <div className="navbarx p-2">
                </div>
            </nav>

        </div>
    );
}


export default NavbarLogin;

