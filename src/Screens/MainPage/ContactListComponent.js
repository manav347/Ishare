import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ContactComponent = (props) => {
  const { userData, setChat } = props;
  return (
    <ContactItem onClick={() => setChat(userData)}>
      <ContactInfo>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ContactName>Name - {userData?.userName}</ContactName>
          {
            userData.lastUpdatedDate != null &&
            <MessageText1> Updated - {(userData.lastUpdatedDate ? userData.lastUpdatedDate.slice(0, 10) : null)}   </MessageText1>
          }
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <MessageText> Ph - {userData?.contactNumber}</MessageText>
          {
            userData.createdDate != null &&
            <MessageText1> Created - {(userData.createdDate ? userData.createdDate.slice(0, 10) : null)}   </MessageText1>
          }
        </div>
      </ContactInfo>
    </ContactItem>
  );
};


function ContactListComponent(props) {

  const [users, setUsers] = useState([]);
  const [optionSort, setOptionSort] = useState('');
  const [usersR, setUsersR] = useState([]);

  useEffect(() => {
    fetch(`https://yktcub3eql.execute-api.ap-south-1.amazonaws.com/dev/getUserOTPRequests`, {
      method: "get"
    })
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
      .catch(e => {
        console.log(e);
      })
  }, [])

  useEffect(() => {
    if (optionSort === 'updatedDate') {
      setUsersR(users.sort((a, b) => a.lastUpdatedDate > b.lastUpdatedDate ? 1 : -1))
    }
  }, [optionSort])

  const handleChange = (e) => {
    setOptionSort(e.target.value);
  };


  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>

        <h4 style={{ margin: "5% 5% 2%", paddingTop: "5%" }}>Users</h4>

        <select onChange={handleChange} name="cars" id="cars" style={{ width: "auto", borderRadius: "10px", margin: "10% 5% 2%", border: "none", padding: "0 5px", height: "30px", fontWeight: "500" }}>

          <option defaultValue value="createdDate">Created Date</option>
          <option value="updatedDate">Updated Date</option>
        </select>
      </div>
      {
        users.length > 0 && optionSort === '' &&
        users.sort((a, b) => a.createdDate > b.createdDate ? -1 : 1).map((userData) => (
          <ContactComponent userData={userData} setChat={props.setChat} />
        ))}
      {
        users.length > 0 && optionSort === 'createdDate' &&
        users.sort((a, b) => a.createdDate > b.createdDate ? -1 : 1).map((userData) => (
          <ContactComponent userData={userData} setChat={props.setChat} />
        ))}
      {
        users.length > 0 && optionSort === 'updatedDate' &&
        users.sort((a, b) => a.lastUpdatedDate > b.lastUpdatedDate ? 1 : -1).map((userData) => (
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
  
@media (max-width: 480px) {
height: 100%;
min-height: 100px;
}

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

const MessageText1 = styled.span`
text-align:right;
  width: 100%;
  font-size: 14px;
  height : 25px;
  overflow: hidden;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
@media (max-width: 480px) {
  overflow: visible;
  height : 100%;
}
`;
const MessageText = styled.span`
  width: 100%;
  font-size: 14px;
  height : 25px;
  overflow: hidden;
  margin-top: 3px;
  color: rgba(0, 0, 0, 0.8);
@media (max-width: 480px) {
  overflow: visible;
  height : 100%;
}
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