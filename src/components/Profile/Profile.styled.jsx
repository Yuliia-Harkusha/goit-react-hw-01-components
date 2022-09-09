import styled from "styled-components";

export const ProfileWrapper = styled.div`
    width: 360px;
    margin-left: auto;
    margin-right:auto;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0px 10px 10px -7px #232222;

`;

export const Img = styled.img`
    display: inline-block;
    padding: 5px;
    background-color: #b1cff3;
    border-radius: 50%;
`

export const Description = styled.div`
    text-align: center;
`;

export const UserName = styled.p`
    padding: 5px;
    font-size: 24px;
    font-weight: 700;
`;

export const UserInfo = styled.p`
    padding: 5px;
    color: #555050;
    font-weight: 500;
`;

export const Stats = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: #84b1e8;
`;

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ListItemText = styled.span`
    display: inline-flex;
    align-items: center;
    padding: 5px;
`;

export const ListItemNumber = styled.span`
    padding: 5px;
    font-weight: 500;
`;


