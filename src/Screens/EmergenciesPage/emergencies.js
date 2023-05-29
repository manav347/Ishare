import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ContactListComponent from './ContactListComponent';
import ConversationComponentEr from './ConversationComponentEr';
import './main.css';

export default function EmergenciesPage() {
	const navigate = useNavigate();
	const [selectedUser, setSelectedUser] = useState(null);

	const handleUserClick = (user) => {
		setSelectedUser(user);
		console.log(user);
	};

	useEffect(() => {
		if (localStorage.getItem('loggedIn') !== 'true') {
			navigate('/');
		}
	}, [navigate]);

	return (
		<>
			<section id='main-section'>
				<Container>
					<ContactListComponent onUserClick={handleUserClick} />
					{selectedUser ? (
						<ConversationComponentEr selectedUser={selectedUser} />
					) : (
						<Placeholder>
							<span>Safety H-Shield</span>
							Be safe.
						</Placeholder>
					)}
				</Container>
			</section>
		</>
	);
}

const Container = styled.div`
	display: flex;
	height: 84vh;
	width: 100%;
	flex-direction: row;
	align-items: center;
	background: #f8f9fb;
`;

// const ChatPlaceholder = styled.img`
// 	width: 240px;
// 	height: 240px;
// 	border-radius: 50%;
// 	object-fit: contain;
// `;
const Placeholder = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	gap: 10px;
	color: rgba(0, 0, 0, 0.45);
	span {
		font-size: 32px;
		color: #525252;
	}
`;
