//import React from 'react';
import PropTypes from 'prop-types';

// Define a styled component using Tailwind CSS
//const StatCard = twc.div`bg-white shadow rounded-lg p-4 flex flex-col items-center`;

// Define the StreakCounter component with a prop for the current streak
const StreakCounter = ({ streak }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold">Current Streak</h3>
      <p className="text-3xl font-bold text-blue-600">{streak}</p>
    </div>
  );
};

// Define prop types for the StreakCounter component
StreakCounter.propTypes = {
  streak: PropTypes.number.isRequired,
};

// Export the StreakCounter component as the default export
export default StreakCounter;