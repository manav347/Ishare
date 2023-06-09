import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Diamond from '../../Assets/Images/bg.png';
import NavbarLogin from '../../Components/NavbarLogin/navbarLogin';

import { css } from '@emotion/react';
import PulseLoader from 'react-spinners/PulseLoader';

function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	let [loading, setLoading] = useState(false);
	// let [color, setColor] = useState('#ffffff');
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (email === 'admin@gmail.com' && password === 'admin') {
			localStorage.setItem('loggedIn', 'true');
			setLoading(false);
			navigate('/emergencies');
		} else if (email === '' && password === '') {
			alert('Please enter email and password');
			setLoading(false);
		} else {
			alert('Invalid credentials');
			setLoading(false);
		}
		// setLoading(true)
		// fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/adminLogin`, {
		// 	method: "post",
		// 	body: JSON.stringify({
		// 		"email": email,
		// 		"password": password
		// 	})
		// })
		// 	.then(res => res.json())
		// 	.then(data => {
		// 		if (data.status === 'Login Success') {
		// 			localStorage.setItem('userids', data.id);
		// 			history.replace(from);
		// 			setLoading(false)
		// 			alert("login successful")
		// 		} if (data.status === "Admin don't exist") {
		// 			setLoading(false)
		// 			alert("Invalid credentials")
		// 		}
		// 	})
		// 	.catch(e => {
		// 		console.log(e);
		// 	})
	};

	return (
		<>
			<NavbarLogin />
			<img
				src={Diamond}
				style={{
					zIndex: '-1',
					position: 'absolute',
					left: '0',
					height: '93vh',
					width: '100%',
				}}
				alt='fireSpot'
			/>
			<Div>
				<Form>
					<HH>Login</HH>
					<Input
						type='email'
						pattern='.+@globex\.com'
						size='30'
						required
						placeholder='Enter email'
						onChange={(event) => setEmail(event.target.value)}
					/>
					<Input
						type='password'
						placeholder='Enter password'
						required
						onChange={(event) => setPassword(event.target.value)}
					/>
					<Div2>
						<input
							type='checkbox'
							style={{ size: '20px', marginRight: '1em' }}
						/>
						<p style={{ fontSize: '15px' }}>Remember me</p>
					</Div2>
					<ButtonWrapper>
						<Button
							type='button'
							to='/main'
							exact
							onClick={() => {
								setLoading(!loading);
								handleSubmit();
							}}
						>
							{loading === false && (
								<p style={{ margin: '0' }}>SUBMIT</p>
							)}
							{loading === true && (
								<PulseLoader
									// color={color}
									loading={loading}
									css={override}
									size={10}
								/>
							)}
						</Button>
					</ButtonWrapper>
				</Form>
			</Div>
		</>
	);
}
const override = css`
	display: block;
	margin: 0 auto;
	border-color: white;
`;

const HH = styled.h1`
	margin: 0.5em 0;
	font-style: normal;
	font-weight: bold;
	font-size: 35px;
`;
const Div2 = styled.div`
	display: flex;
	padding: 0.5em 0;
`;

const Div = styled.div`
	padding: 5% 20%;
	font-family: 'Playfair Display', serif;
	color: #032d23;
	margin-top: 7vh;
	height: 93vh;
	text-align: start;
	background-size: 100% 100%;
	background-image: url('Diamond');
	background-repeat: no-repeat;
	@media (max-width: 480px) {
	}
`;

const ButtonWrapper = styled.div`
	display: grid;
	place-items: center;
	width: 100%;
	@media (max-width: 480px) {
		height: 4em;
	}
`;

// const TextArea = styled.textarea`
// 	margin-top: 0.5em;
// 	resize: none;
// 	background-color: inherit;
// 	border: 1px solid #a5a1a1;
// 	font-size: 18px;
// 	line-height: 22px;
// 	padding: 0.5em;
// `;
const Button = styled.button`
	background-color: #032d23;
	color: white;
	outline: none;
	border: none;
	padding: 0.5em 1em;
	font-size: 15px;
	width: 100%;
	border-radius: 0.4em;
	@media (max-width: 480px) {
		font-size: 21px;
	}
`;
const Form = styled.form`
	border-radius: 5px;
	margin: 0 auto;
	padding: 1em;
	padding-bottom: 0;
	display: flex;
	flex-direction: column;
	width: 40%;
	font-size: 21px;
	line-height: 22px;
	@media (max-width: 480px) {
		width: 100%;
		padding: 0 1em;
		margin-top: 60%;
	}
`;
// const Label = styled.label`
// 	margin-top: 1.5em;
// 	@media (max-width: 480px) {
// 		margin-top: 1em;
// 		font-size: 21px;
// 	}
// `;
const Input = styled.input`
	margin: 1em 0;
	border: 2.5px solid #032d23;
	box-sizing: border-box;
	border-radius: 6px;
	background-color: inherit;
	outline: none;
	padding: 0.5em;
	font-size: 15px;
	line-height: 22px;
`;

export default LoginPage;
