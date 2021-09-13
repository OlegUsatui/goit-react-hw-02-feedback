import Notification from '../Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return total < 1 ? (<Notification message="No feedback given" />) : (
        <div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {positivePercentage}%</p>
        </div>
    );
};

export default Statistics;
