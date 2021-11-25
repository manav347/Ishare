import React, { useState } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player'
import { messagesList } from "./mockData";
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapContainer from "../../Components/Map/map";

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

export default function ConversationComponentEr(props) {
  const { selectedChat } = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState(messagesList);

  const onEnterPress = (event) => {
    if (event.key === "Enter") {
      const messages = [...messageList];
      messages.push({
        id: 0,
        messageType: "TEXT",
        text,
        senderID: 0,
        addedOn: "12:02 PM",
      });
      setMessageList(messages);
      setText("");
    }
  };
  return (
    <Container>
      <MessageContainer>
        {messageList.map((messageData) => (
          <MessageDiv isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>
              {[messageData.text]}
            </Message>
          </MessageDiv>
        ))}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "350px", height: "250px", backgroundColor: "red", margin: "30px" }}>
            <MapContainer />
          </div>
          <div style={{ width: "350px", height: "250px", backgroundColor: "blue", margin: "30px" }}>
            <ReactPlayer url='https://res.cloudinary.com/demo/video/upload/c_crop,h_200,w_300/dog.mp4'
              width='100%'
              height='100%'
              controls />
          </div>
        </div>
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ width: "300px", height: "200px", backgroundColor: "red", margin: "30px" }}>
            <MapContainer
              width='100%'
              height='100%' />
          </div>
          <div style={{ width: "300px", height: "200px", backgroundColor: "blue", margin: "30px" }}>
            <ReactPlayer url='https://www.youtube.com/watch?v=QqjBMVylBL4'
              width='100%'
              height='100%'
              controls />
          </div>
        </div> */}

      </MessageContainer>
    </Container>
  );
}
// ConversationComponent;