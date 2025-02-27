import { twc } from "react-twc";
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

const ProgressIndicator = twc(CircularProgressbar)`w-64 h-64`;

function Timer({ timeLeft, totalTime }) {
    const progress = (timeLeft / totalTime) * 100;
    return (
        <ProgressIndicator percentage={progress}>
            <CircularProgressbar
                value={progress}
                text={`${timeLeft}s`}
                styles={{
                    path: {
                        stroke: '#FFEA82',
                        strokeDasharray: '100 200',
                        strokeDashoffset: '-100',
                    },
                    trail: {
                        stroke: '#D6D6D6',
                        strokeDasharray: '100 200',
                    },
                    text: {
                        fill: '#363636',
                        fontSize: '1.25rem',
                    },
                }}
            />
        </ProgressIndicator>
    );
}
Timer.propTypes = {
    timeLeft: PropTypes.number.isRequired,
    totalTime: PropTypes.number.isRequired,
};

export default Timer;
