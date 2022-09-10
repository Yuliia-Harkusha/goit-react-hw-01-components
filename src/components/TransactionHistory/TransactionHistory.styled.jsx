import styled from "styled-components";

export const TransactionTable = styled.table`
    width: 100%;
    text-align: center;
`;

export const TransactionHead = styled.thead`
    height: 45px;
    background-color: #1079f1;
    font-size: 20px;
    color: #fff;
`;

export const TableRow = styled.tr`
    height: 40px;
    :nth-child(2n) {
        background-color: #f1f1f1;
    }
`