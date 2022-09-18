import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationBock = styled.p`
  margin: 0px 0px 35em;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
`;

export const Notification = ({ message }) => {
  return <NotificationBock>{message}</NotificationBock>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
