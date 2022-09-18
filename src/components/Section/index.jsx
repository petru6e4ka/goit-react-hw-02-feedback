import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionBlock = styled.section`
  padding: 25px 15px;
`;

const Heading = styled.h2`
  margin: 0px 0px 0.35em;
  font-weight: 400;
  font-size: 2.125rem;
  line-height: 1.235;
`;

export const Section = ({ title, children }) => {
  return (
    <SectionBlock>
      <Heading>{title}</Heading>
      {children}
    </SectionBlock>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
