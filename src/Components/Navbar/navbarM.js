import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./navbarM.css";
import { FaBookmark } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Diamond from '../../Assets/Images/dLogo.png';
import { UseSelectedLocation } from "../context";


function NavbarM() {

    const [getlocation, setGetlocation] = useState([]);
    const { slocation, setSlocation } = UseSelectedLocation()

    console.log(slocation)
    useEffect(() => {
        fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getAllRegions`, {
            method: "get"
        })
            .then(res => res.json())
            .then(initialLocation => {
                setGetlocation(initialLocation);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div id="navid">
            <nav className="navbar fixed-top navbar-expand-lg container-fluid">
                <div style={{ display: "flex", marginTop: "10px" }}  >
                    <img className="graph" src={Diamond} alt="" style={{ height: "2em", width: "3em", margin: "auto", }}></img>
                    <p className="navbar-brand1" href="home">Hi Manav,</p>
                    <p className="navbar-brand2" href="home">Welcome to I Share</p>

                    <FaUserCircle style={{ fontSize: "30px", color: "#fff9f9;", margin: "0 10px" }} />
                </div>
                <div className="navbary p-2">
                    <Link to="/er"><button className="ButtonEr">Emergencies</button></Link>
                    <Link to="/main"><button className="ButtonEr">Users</button></Link>

                    <select onChange={(e) => setSlocation(e.target.value)} name="cars" id="cars" style={{ width: "auto", margin: "0.4em", padding: "0 5px", height: "30px", fontWeight: "500" }}>
                        {
                            getlocation.map((item, index) =>
                                <option onChange={(e) => setSlocation(e.target.value)} key={item.regionName} value={item.regionName}  >{item.regionName}</option>
                            )
                        }
                    </select>

                    <FaBookmark style={{ fontSize: "30px", margin: "0.2em 2em 0 0.5em" }} />
                </div>

            </nav>

        </div>
    );
}

export default NavbarM;

