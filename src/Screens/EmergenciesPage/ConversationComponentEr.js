import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'
import { messagesList } from "./mockData";
import MapContainer from "../../Components/Map/map";
import { UseSelectedLocation } from "../../Components/context";


export default function ConversationComponentEr(props) {
  const { selectedChat } = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState(messagesList);
  const { slocation, setSlocation } = UseSelectedLocation()


  const [emergencies, setEmergencies] = useState([]);

  // console.log(selectedChat)

  // const onEnterPress = (event) => {
  //   if (event.key === "Enter") {
  //     const messages = [...messageList];
  //     messages.push({
  //       id: 0,
  //       messageType: "TEXT",
  //       text,
  //       senderID: 0,
  //       addedOn: "12:02 PM",
  //     });
  //     setMessageList(messages);
  //     setText("");
  //   }
  // };


  useEffect(() => {
    fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getEmergencyData/${selectedChat.userId}`, {
      method: "post",
      body: JSON.stringify({
        "regionName": slocation
      })
    })
      .then(res => res.json(
      ))
      .then(data => {
        {
          data.length > 0 &&

            console.log(data);
          setEmergencies(data);
        }
        // setEmergencies(data);
      })
      .catch(e => {
        //       console.log(e);
      })
  }, [selectedChat.userId, slocation])
  //  console.log(emergencies.videoURL);
  return (
    <Container>
      <MessageContainer>

        <MessageDiv isYours={selectedChat.userId === 0}>
          <Message isYours={selectedChat.userId === 0}>
            Name - {selectedChat.userName}
          </Message>
        </MessageDiv>
        <MessageDiv isYours={selectedChat.userId === 0}>
          <Message isYours={selectedChat.userId === 0}>
            Ph - {selectedChat.contactNumber}
          </Message>
        </MessageDiv>



        <ErParentCon>
          <ErCon1>
            <MapContainer />
          </ErCon1>
          <ErCon>
            <ReactPlayer url={emergencies[0] ? emergencies[0].videoURL : null}
              width='100%'
              height='100%'
              controls />
          </ErCon>
        </ErParentCon>

      </MessageContainer>
    </Container>
  );
}

const ErParentCon = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 480px) {
display: block;
}
`;


const ErCon1 = styled.div`
width: 350px;
height: 250px;
background-color: blue;
margin: 30px;
@media (max-width: 480px) {
  width:90%;
  height: 20vh;
margin: 5%;
}
`;

const ErCon = styled.div`
width: 350px;
height: 250px;
background-color: blue;
margin: 30px;
@media (max-width: 480px) {
  width:90%;
  height: auto;
margin: 5%;
}
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100%;
  width: 100%;
  background: #f6f7f8;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  align-items: center;
  gap: 10px;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ContactName = styled.span`
  font-size: 16px;
  color: black;
`;

const ChatBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #E5E5E5;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  overflow-y: auto;
  padding-top: 5%;
  background: #E5E5E5;
`;
const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.4;
  cursor: pointer;
`;