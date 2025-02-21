import Card from '../common/Card';
import PropTypes from 'prop-types';

// Define the TimerDisplay component with a prop for the current time
const TimerDisplay = ({ time }) => {
  // Function to format the time in mm:ss format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0');
    const seconds = (timeInSeconds % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <Card>
      {/* Display the formatted time */}
      <h1 className="text-4xl font-bold">{formatTime(time)}</h1>
    </Card>
  );
};
// Define prop types for the TimerDisplay component
TimerDisplay.propTypes = {
  time: PropTypes.number.isRequired,
};
// Export the TimerDisplay component as the default export
export default TimerDisplay;