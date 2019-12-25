import React from 'react';
import PropTypes from 'prop-types';
import FeedbackChoice from '../FeedbackChoice/FeedbackChoice';
import Stat from '../Stat/Stat';

const MainSection = ({
  title,
  handleLeaveFeedback,
  options,
  good,
  neutral,
  bad,
  countTotalFeedbacks,
  countPositiveFeedbacksPercentage,
}) => {
  return (
    <>
      <h1>{title}</h1>
      <FeedbackChoice options={options} onLeaveFeedback={handleLeaveFeedback} />
      <Stat
        good={good}
        neutral={neutral}
        bad={bad}
        countTotalFeedbacks={countTotalFeedbacks}
        countPositiveFeedbacksPercentage={countPositiveFeedbacksPercentage}
      />
    </>
  );
};

MainSection.propTypes = {
  title: PropTypes.string.isRequired,
  handleLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({}).isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedbacks: PropTypes.number.isRequired,
  countPositiveFeedbacksPercentage: PropTypes.number.isRequired,
};

export default MainSection;
