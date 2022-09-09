import PropTypes from 'prop-types';
import { StatSection, Title, StatList, StatItem, StatData } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <StatSection>
            {title && <Title>{title}</Title>}

            <StatList>
                {stats.map(({ id, label, percentage }) => {
                    return (
                        <StatItem key={id}>
                            <StatData>{label}</StatData>
                            <StatData>{percentage}%</StatData>
                        </StatItem>
                    )
                })
                }
            </StatList>
        </StatSection>
    )
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    )
};