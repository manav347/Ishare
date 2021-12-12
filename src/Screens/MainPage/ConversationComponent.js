import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import Picker from "emoji-picker-react";
import { messagesList } from "./mockData";


function ConversationComponent(props) {
  const { selectedChat } = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState(messagesList);
  const [otpSent, setOtpSent] = useState(false);
  const [userData, setUserData] = useState([]);


  console.log(userData)
  console.log(selectedChat)
  let a = (selectedChat.id)
  console.log(a)
  // console.log(otpSent)

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



  useEffect(() => {

    console.log(selectedChat.userId);
    fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getUserData/${a}`, {
      method: "get"
    })
      .then(res => res.json(
      ))
      .then(data => {
        {
          console.log("data");
          console.log(data);
          setUserData(data);
        }
        // setEmergencies(data);
      })
      .catch(e => {
        //       console.log(e);
      })
  }, [selectedChat, userData.otpSent])

  const ss = () => {
    setOtpSent(true);
    fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/changeOTPSentStatus/${selectedChat.id}`, {
      method: "put"
    })
      .then(res => res.json())
      .then(data => {
        alert("Otp sent !!")
      })
      .catch(e => {
        alert("Error !!")
      })
  }


  return (
    <Container>
      <MessageContainer>

        <MessageDiv isYours={selectedChat.id === 0}>
          <Message isYours={selectedChat.id === 0}>
            Name - {selectedChat.userName}
          </Message>
        </MessageDiv>
        <MessageDiv isYours={selectedChat.id === 0}>
          <Message isYours={selectedChat.id === 0}>
            Ph - {selectedChat.contactNumber}
          </Message>
        </MessageDiv>
        <MessageDiv isYours={selectedChat.id === 0}>
          <Message isYours={selectedChat.id === 0}>
            Email - {selectedChat.email}
          </Message>
          {selectedChat.id}
          {selectedChat.otpSent}
        </MessageDiv>



        {
          userData.otpSent === 'false' &&
          <ChatBox>
            <UserAlertButtonG onClick={() => ss()} >Approve </UserAlertButtonG>
            <UserAlertButton >Reject</UserAlertButton>
          </ChatBox>
        }
        {
          userData.otpSent == 'null' &&
          <ChatBox>
            <UserAlertButtonG onClick={() => ss()} >Approve </UserAlertButtonG>
            <UserAlertButton >Reject</UserAlertButton>
          </ChatBox>
        }




      </MessageContainer>
    </Container>
  );
}

export default ConversationComponent;

const UserAlertButtonG = styled.button`
width: 150px;
border-radius: 30px;
color: #fff;
margin: 0.4em;
padding: 0 5px;
height: 60px;
border: none;
font-weight: 500;
background-color: green;
@media (max-width: 480px) {
  width:100px;
  height: 40px;
}
`;
const UserAlertButton = styled.button`
width: 150px;
border-radius: 30px;
color: #fff;
margin: 0.4em;
padding: 0 5px;
height: 60px;
border: none;
font-weight: 500;
background-color: #A30000;
@media (max-width: 480px) {
  width:100px;
  height: 40px;
}
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
  gap: 10px;
`;

const SearchInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-size: 15px;
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
  justify-content: space-between;
  background: #E5E5E5;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
  @media (max-width: 480px) {
  max-width: 100%;
}
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  opacity: 0.4;
  cursor: pointer;
`;




