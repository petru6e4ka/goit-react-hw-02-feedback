import { Component } from 'react';
import styled from 'styled-components';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';

const BlockContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #edf0f7;
`;

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement(evt) {
    this.setState(prevState => {
      return {
        ...prevState,
        [evt.target.name]: prevState[evt.target.name] + 1,
      };
    });
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((prev, next) => prev + next);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  }

  render() {
    return (
      <BlockContainer>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            {...this.state}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </BlockContainer>
    );
  }
}
