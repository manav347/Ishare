import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Diamond from '../../Assets/Images/bg.png';
import NavbarLogin from '../../Components/NavbarLogin/navbarLogin';

function LoginPage() {

	return (

		<>
			<NavbarLogin />
			<img src={Diamond} style={{ zIndex: "-1", position: "absolute", left: "0", height: "93vh", width: "100%" }} alt="fireSpot" />
			<Div >
				<Form>
					<HH>Login</HH>
					<Input
						placeholder='Enter credentials'
					/>
					<Input
						type="email"
						placeholder='Enter password'
						pattern=".+@globex\.com" size="30" required
					/>
					<Div2>
						<input type="checkbox" style={{ size: "20px", marginRight: "1em" }} />
						<p style={{ fontSize: "15px" }} >Remember me</p>
					</Div2>
					<ButtonWrapper>
						<Button type='button' to="/main" exact>
							SUBMIT
						</Button>
					</ButtonWrapper>
				</Form>

			</Div>
		</>
	)
}

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
padding: 5% 20% ;
font-family: "Playfair Display", serif;
color: #032D23;
margin-top: 7vh;
height: 93vh;
text-align: start;
  background-size: 100% 100%;
background-image: url("Diamond");
background-repeat: no-repeat;
	@media (max-width: 480px) {
	}
`;

const ButtonWrapper = styled.div`
	display: grid;
	height: 8em;
	place-items: center;
	width: 100%;
	@media (max-width: 480px) {
		height: 4em;
	}
`;

const TextArea = styled.textarea`
	margin-top: 0.5em;
	resize: none;
	background-color: inherit;
	border: 1px solid #a5a1a1;
	font-size: 18px;
	line-height: 22px;
	padding: 0.5em;
`;
const Button = styled.button`
	background-color: #032D23;
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
		margin-top: 1em;
	}
`;
const Label = styled.label`
	margin-top: 1.5em;
	@media (max-width: 480px) {
		margin-top: 1em;
		font-size: 21px;
	}
`;
const Input = styled.input`
	margin: 1em 0;
	border: 2.5px solid #032D23;
	box-sizing: border-box;
	border-radius: 6px;
	background-color: inherit;
	outline: none;
	padding: 0.5em;
	font-size: 15px;
	line-height: 22px;
`;


export default LoginPage
