import styled from "styled-components";

export const StatSection = styled.section`
    width: 600px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
    margin-bottom: 15px;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
`;

export const StatList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #0ca53a;
`;

export const StatItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StatData = styled.span`
    padding: 8px;
    font-size: 20px;
`;