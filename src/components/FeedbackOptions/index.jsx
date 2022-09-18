import PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptionsBlock = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin-right: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  cursor: pointer;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  border: 1px solid rgba(25, 118, 210, 0.5);
  color: rgb(25, 118, 210);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover,
  &:active {
    border: 1px solid rgb(25, 118, 210);
    background-color: rgba(25, 118, 210, 0.04);
  }
`;

export const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  return (
    <FeedbackOptionsBlock>
      {options.map(option => (
        <Button name={option} onClick={onLeaveFeedback} key={option}>
          {option}
        </Button>
      ))}
    </FeedbackOptionsBlock>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
