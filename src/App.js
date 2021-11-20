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

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
        <Routes>
          <Route path="/main" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/er" element={<EmergenciesPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
