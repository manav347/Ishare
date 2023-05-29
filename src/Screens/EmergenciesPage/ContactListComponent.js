// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';
import { Users } from './mockData';

const ContactComponent = ({ userData, onClick }) => {
	//pass individual userdata on click to conversationcomponent
	const handleClick = () => {
		onClick(userData);
	};
	return (
		<ContactItem onClick={handleClick}>
			<ContactInfo>
				<div
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<ContactName>Name - {userData?.User}</ContactName>
				</div>
				<div
					style={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<MessageText>
						{' '}
						Emergency date - {userData?.Emergency_date}
					</MessageText>
				</div>
			</ContactInfo>
		</ContactItem>
	);
};
function ContactListComponent({ onUserClick }) {
	// const { slocation, setSlocation } = UseSelectedLocation();
	// const [users, setUsers] = useState([]);

	// useEffect(() => {
	// 	fetch(
	// 		`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getEmergencyData`,
	// 		{
	// 			method: 'post',
	// 			body: JSON.stringify({
	// 				regionName: slocation,
	// 			}),
	// 		},
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			setUsers(data);
	// 		})
	// 		.catch((e) => {
	// 			console.log(e);
	// 		});
	// }, [slocation]);

	const handleChange = (e) => { };

	return (
		<Container>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<h4 style={{ margin: '5% 5% 2%', paddingTop: '5%' }}>
					Emergencies
				</h4>

				<select
					onChange={handleChange}
					name='cars'
					id='cars'
					style={{
						width: 'auto',
						borderRadius: '10px',
						margin: '10% 5% 2%',
						border: 'none',
						padding: '0 5px',
						height: '30px',
						fontWeight: '500',
					}}
				>
					<option defaultValue value='createdDate'>
						Created Date
					</option>
				</select>
			</div>

			{Users.length > 0 &&
				Users.map((userData) => (
					<ContactComponent
						userData={userData}
						onClick={() => onUserClick(userData)}
					/>
				))}
		</Container>
	);
}

export default ContactListComponent;


const Container = styled.div`
	display: flex;
	flex-direction: column;
	text-align: start;
	flex: 1.6;
	height: 100%;
	width: 100%;
	overflow-y: scroll;
	background: #e5e5e5;
	border-right: 1px solid #dadada;
`;



// const SearchBox = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	background: #f6f6f6;
// 	padding: 10px;
// `;
export const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: white;
	border-radius: 16px;
	width: 100%;
	padding: 5px 10px;
	gap: 10px;
`;
// const SearchIcon = styled.img`
// 	width: 28px;
// 	height: 28px;
// `;
export const SearchInput = styled.input`
	width: 100%;
	outline: none;
	border: none;
	font-size: 15px;
`;

const ContactItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 90%;
	margin: 2% 5%;
	border-radius: 10px;
	border-bottom: 1px solid #f2f2f2;
	background: white;
	cursor: pointer;

	:hover {
		background: #ebebeb;
	}
`;
const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 12px;
`;

const ContactName = styled.span`
	width: 100%;
	font-size: 16px;
	color: black;
`;

const MessageText = styled.span`
	width: 100%;
	font-size: 14px;
	height: 25px;
	overflow: hidden;
	margin-top: 3px;
	color: rgba(0, 0, 0, 0.8);
	@media (max-width: 480px) {
		overflow: visible;
		height: 100%;
	}
`;

// const MessageTime = styled.span`
// 	font-size: 12px;
// 	margin-right: 10px;
// 	color: rgba(0, 0, 0, 0.45);
// 	white-space: nowrap;
// `;

// const ProfileImage = styled.img`
// 	width: 32px;
// 	height: 32px;
// 	border-radius: 50%;
// `;
// const ProfileIcon = styled(ProfileImage)`
// 	width: 38px;
// 	height: 38px;
// 	border-radius: 50%;
// 	margin-left: 12px;
// 	margin-top: 15px;
// 	margin-bottom: 15px;
// 	object-fit: cover;
// `;
