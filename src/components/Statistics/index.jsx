import { Notification } from 'components/Notification';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsBlock = styled.div`
  li {
    margin-bottom: 10px;
  }
`;

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsBlock>
      {total ? (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive persentage: {positivePercentage}%</li>
        </ul>
      ) : (
        <Notification message={'No feedback given'} />
      )}
    </StatisticsBlock>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
