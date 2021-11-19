import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './Screens/MainPage/main';
import LoginPage from './Screens/LandingPage/login';
import Navbar from './Components/Navbar/navbar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    <Navbar/>
    </div>
  );
}

export default App;
