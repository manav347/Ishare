import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { FaBookmark } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import Diamond from '../../Assets/Images/dLogo.png';


function Navbar() {

    const [getlocation, setGetlocation] = useState([]);

    useEffect(() => {
        fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getAllRegions`, {
            method: "get"
        })
            .then(res => res.json())
            .then(initialLocation => {
                setGetlocation(initialLocation);
                console.log(getlocation);
            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div id="navid">
            <nav className="navbar fixed-top navbar-expand-lg container-fluid">
                <img className="graph" src={Diamond} alt="" style={{ height: "8em", width: "8em" }}></img>
                <div className="navbarx p-2">
                    <p className="navbar-brand1" href="home">Hi Manav,</p>
                    <p className="navbar-brand2" href="home">Welcome to I Share</p>
                </div>
                <div className="navbary p-2">
                    <button onClick={() => window.location.href = '/er'} className="ButtonEr" href="/er">Emergencies</button>
                    <button onClick={() => window.location.href = '/main'} className="ButtonEr" to="/main">Users</button>
                </div>
                <div className=" navbar ms-auto p-2" id="navbarSupportedContent">
                    <div class="input-group d-flex">
                        <select name="cars" id="cars" style={{ width: "187px", margin: "0.4em", padding: "0 5px", height: "30px", fontWeight: "500" }}>


                            {
                                getlocation.map((item, index) =>
                                    <option key={item.regionName} value={item.regionName} >{item.regionName}</option>
                                )
                            }

                            {/* <option value="volvo">Select region</option>
                            <option value="saab">Maharashtra</option>
                            <option value="opel">Punjab</option>
                            <option value="audi">Up</option> */}
                        </select>
                        <FaBookmark style={{ fontSize: "30px", margin: "0.2em 2em 0 0.5em" }} />
                        <FaUserCircle style={{ fontSize: "45px", color: "#fff9f9;" }} />
                    </div>
                </div>

            </nav>

        </div>
    );
}

export default Navbar;

