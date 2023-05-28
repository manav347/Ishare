import React, { useState, useEffect } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './Screens/MainPage/main';
import EmergenciesPage from './Screens/EmergenciesPage/emergencies';
import LoginPage from './Screens/LandingPage/login';
import Navbar from './Components/Navbar/navbar';
import NavbarM from "./Components/Navbar/navbarM";
import { Context } from './Components/context';
import PrivateRoute from './Components/PrivateRoute';



function App() {

  const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 480);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (



    <Context>
      <Router>
        {isDesktop ? (
          <Navbar />
        ) : (
          <NavbarM />
        )}

        <Switch>
          <Route exact path="/">
            <LoginPage></LoginPage>
          </Route>


          <Route exact path="/main">
            <MainPage></MainPage>
          </Route>

          <Route exact path="/er">
            <EmergenciesPage></EmergenciesPage>
          </Route>

        </Switch>




      </Router>
    </Context>
  );
}

export default App;
