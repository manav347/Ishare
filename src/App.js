import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './Screens/MainPage/main';
import EmergenciesPage from './Screens/EmergenciesPage/emergencies';
import LoginPage from './Screens/LandingPage/login';
import Navbar from './Components/Navbar/navbar';
import { Context } from './Components/context';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Context>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <PrivateRoute exact path="/">
              <LoginPage></LoginPage>
            </PrivateRoute> */}
            <Route path="/" element={<LoginPage />} />
          </Routes>
          <Routes>
            {/* <PrivateRoute exact path="/main">
              <MainPage></MainPage>
            </PrivateRoute> */}
            <Route path="/main" element={<MainPage />} />
          </Routes>
          <Routes>
            {/* <PrivateRoute exact path="/er">
              <EmergenciesPage></EmergenciesPage>
            </PrivateRoute> */}
            <Route path="/er" element={<EmergenciesPage />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </div>
  );
}

export default App;
