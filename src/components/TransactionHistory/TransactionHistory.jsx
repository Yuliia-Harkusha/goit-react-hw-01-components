import PropTypes from 'prop-types';
import { TransactionTable, TransactionHead, TableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <TransactionHead>
               <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </TransactionHead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <TableRow key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </TableRow>
                    )
                })
                }
            </tbody>
        </TransactionTable>

    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
        }).isRequired,
    )
};