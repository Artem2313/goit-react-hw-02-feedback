import React, { Component } from 'react';
import MainSection from './MainSection/MainSection';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedbacks = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedbacks = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbacksPercentage = () => {
    const Total = this.countTotalFeedbacks();
    const { good } = this.state;
    return Total === 0 ? 0 : Math.round((good / Total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <MainSection
          title="Please leave your feedback"
          good={good}
          neutral={neutral}
          bad={bad}
          handleLeaveFeedback={this.handleLeaveFeedbacks}
          options={{ good, neutral, bad }}
          countTotalFeedbacks={this.countTotalFeedbacks()}
          countPositiveFeedbacksPercentage={this.countPositiveFeedbacksPercentage()}
        />
      </div>
    );
  }
}
