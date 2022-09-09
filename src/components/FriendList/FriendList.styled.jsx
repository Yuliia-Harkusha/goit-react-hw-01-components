import styled from "styled-components";

export const FriendListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-right: auto;
    margin-left: auto;
    
`;

export const FriendsListItem = styled.li`
    display: flex;
    align-items:center;
    justify-content: flex-start;
    gap: 15px;
    padding: 15px;
    border-radius: 3px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

`;

export const Status = styled.span`
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.isOnline ? 'green' : 'red'};
`;

export const FriendImg = styled.img`
    display: inline-block;
    padding: 10px;
    border: 1px solid #bcc3d7;
    border-radius: 5px;
`;

export const FriendName = styled.p`
    font-weight: 500;
`;