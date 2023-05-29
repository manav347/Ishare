// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import NavbarM from './Components/Navbar/navbarM';
import { Context } from './Components/context';
import EmergenciesPage from './Screens/EmergenciesPage/emergencies';
import LoginPage from './Screens/LandingPage/login';

function App() {
	const [isDesktop, setDesktop] = useState(window.innerWidth > 480);

	const updateMedia = () => {
		setDesktop(window.innerWidth > 480);
	};

	useEffect(() => {
		window.addEventListener('resize', updateMedia);
		return () => window.removeEventListener('resize', updateMedia);
	});

	return (
		<Context>
			{isDesktop ? <Navbar /> : <NavbarM />}
			<Routes>
				<>
					<Route path='/' element={<LoginPage />} />
					<Route path='/emergencies' element={<EmergenciesPage />} />
				</>
			</Routes>
		</Context>
	);
}

export default App;
