// eslint-disable-next-line no-unused-vars
import React from 'react';
import styled from 'styled-components';

export default function ConversationComponentEr({ selectedUser }) {
	// const [emergencies, setEmergencies] = useState([]);

	console.log(selectedUser);

	// useEffect(() => {
	// 	fetch(
	// 		`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getEmergencyData/${selectedChat.userId}`,
	// 		{
	// 			method: 'post',
	// 			body: JSON.stringify({
	// 				regionName: slocation,
	// 			}),
	// 		},
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => {
	// 			{
	// 				data.length > 0 && console.log(data);
	// 				setEmergencies(data);
	// 			}
	// 		})
	// 		.catch((e) => {
	// 			//       console.log(e);
	// 		});
	// }, [selectedChat.userId, slocation]);
	return (
		<Container>
			<MessageContainer>
				<MessageDiv>
					<Message>Name - {selectedUser.User}</Message>
				</MessageDiv>
				<MessageDiv>
					<Message>Type - {selectedUser.type}</Message>
				</MessageDiv>
				<MessageDiv>
					<Message>
						Registration - {selectedUser.registration}
					</Message>
				</MessageDiv>
				<MessageDiv>
					<Message>
						Emergency date - {selectedUser.Emergency_date}
					</Message>
				</MessageDiv>
				<MessageDiv>
					<Message>Time - {selectedUser.Time}</Message>
				</MessageDiv>
				<MessageDiv>
					<Message>Location - {selectedUser.location}</Message>
				</MessageDiv>
				<MessageDiv>
					<Message>Emergency - {selectedUser.Emergency}</Message>
				</MessageDiv>
				<MessageDiv>
					<Message>Message - {selectedUser.Message}</Message>
				</MessageDiv>



				{/* <ErParentCon>
					<ErCon1>
						<MapContainer
							cord={emergencies[0] ? emergencies[0].gps : null}
						/>
					</ErCon1>
					<ErCon>
						<ReactPlayer
							url={
								emergencies[0] ? emergencies[0].videoURL : null
							}
							width='100%'
							height='100%'
							controls
						/>
					</ErCon>
				</ErParentCon> */}
			</MessageContainer>
		</Container>
	);
}

// const ErParentCon = styled.div`
// 	display: flex;
// 	justify-content: space-between;
// 	@media (max-width: 480px) {
// 		display: block;
// 	}
// `;

// const ErCon1 = styled.div`
// 	width: 350px;
// 	height: 250px;
// 	background-color: blue;
// 	margin: 30px;
// 	@media (max-width: 480px) {
// 		width: 90%;
// 		height: 20vh;
// 		margin: 5%;
// 	}
// `;

// const ErCon = styled.div`
// 	width: 350px;
// 	height: 250px;
// 	margin: 30px;
// 	@media (max-width: 480px) {
// 		width: 90%;
// 		height: auto;
// 		margin: 5%;
// 	}
// `;

// const SearchBox = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	background: #f6f6f6;
// 	padding: 10px;
// `;
// const SearchContainer = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	background: white;
// 	border-radius: 16px;
// 	width: 100%;
// 	padding: 5px 10px;
// 	gap: 10px;
// `;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
	height: 100%;
	width: 100%;
	background: #f6f7f8;
`;

// const ProfileHeader = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	background: #ededed;
// 	padding: 10px;
// 	align-items: center;
// `;

// const ProfileInfo = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	background: #ededed;
// 	align-items: center;
// 	gap: 10px;
// `;

// const ProfileImage = styled.img`
// 	width: 32px;
// 	height: 32px;
// 	border-radius: 50%;
// `;
// const ContactName = styled.span`
// 	font-size: 16px;
// 	color: black;
// `;

// const ChatBox = styled.div`
// 	display: flex;
// 	flex-direction: row;
// 	background: #e5e5e5;
// 	padding: 10px;
// 	align-items: center;
// 	bottom: 0;
// `;
const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	overflow-y: scroll;
	overflow-y: auto;
	padding-top: 5%;
	background: #e5e5e5;
`;
const MessageDiv = styled.div`
	display: flex;
	justify-content: ${(props) => (props.isYours ? 'flex-end' : 'flex-start')};
	margin: 5px 15px;
`;
const Message = styled.div`
	background: ${(props) => (props.isYours ? '#daf8cb' : 'white')};
	padding: 8px 10px;
	border-radius: 4px;
	max-width: 50%;
	color: #303030;
	font-size: 14px;
`;
// const EmojiImage = styled.img`
// 	width: 28px;
// 	height: 28px;
// 	border-radius: 50%;
// 	opacity: 0.4;
// 	cursor: pointer;
// `;
