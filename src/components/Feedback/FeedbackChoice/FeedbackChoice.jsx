import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackChoice = ({ options, onLeaveFeedback }) => (
  <div>
    {Object.keys(options).map(option => (
      <button
        type="button"
        name={option}
        key={shortid.generate()}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackChoice.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackChoice;
