const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <>
            {options.map(option => {
                return (
                    <button type='button' onClick={onLeaveFeedback} name={option}>{option}</button>
                )
            })}
        </>
    );
};

export default FeedbackOptions;