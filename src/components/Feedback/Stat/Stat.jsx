import React from 'react';
import PropTypes from 'prop-types';

const Stat = ({
  good,
  neutral,
  bad,
  countTotalFeedbacks,
  countPositiveFeedbacksPercentage,
}) => {
  return (
    <section>
      <h2>Statistics</h2>
      <div>
        <p value={good}>good: {good}</p>
        <p value={neutral}>neutral: {neutral}</p>
        <p value={bad}>bad: {bad}</p>
        <p value={countTotalFeedbacks}>Total: {countTotalFeedbacks}</p>
        <p value={countPositiveFeedbacksPercentage}>
          Positive: {countPositiveFeedbacksPercentage}%
        </p>
      </div>
    </section>
  );
};

Stat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedbacks: PropTypes.number.isRequired,
  countPositiveFeedbacksPercentage: PropTypes.number.isRequired,
};

export default Stat;
