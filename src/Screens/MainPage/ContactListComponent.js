import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContactComponent = (props) => {
  const { userData, setChat } = props;
  return (
    <ContactItem onClick={() => setChat(userData)}>
      {/* <ProfileIcon src={userData.profilePic} /> */}
      <ContactInfo>
        <ContactName>Name - {userData?.userName}</ContactName>
        <MessageText> Ph - {userData?.contactNumber}</MessageText>
      </ContactInfo>
      {/* <MessageTime> {userData?.phoneNoTime}</MessageTime> */}
    </ContactItem>
  );
};


function ContactListComponent(props) {

  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getUserOTPRequests`, {
      method: "get"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setUsers(data);
      })
      .catch(e => {
        console.log(e);
      })
  }, [])

  console.log(users)

  return (
    <Container>
      <h4 style={{ margin: "5% 5% 2%", paddingTop: "5%" }}>Users</h4>

      {
        users.length > 0 &&
        users.map((userData) => (
          <ContactComponent userData={userData} setChat={props.setChat} />
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
  background: #E5E5E5;
  border-right: 1px solid #dadada;
`;

const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  background: #f6f6f6;
  padding: 10px;
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  border-radius: 16px;
  width: 100%;
  padding: 5px 10px;
  gap: 10px;
`;
const SearchIcon = styled.img`
  width: 28px;
  height: 28px;
`;
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
  min-height: 53px;

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
  height : 25px;
  overflow: hidden;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
`;

const MessageTime = styled.span`
  font-size: 12px;
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const ProfileIcon = styled(ProfileImage)`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
  object-fit: cover;
`;