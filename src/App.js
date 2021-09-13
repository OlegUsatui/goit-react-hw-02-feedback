import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Section from './Components/Section/Section';
import Statistics from './Components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const goodPercentage = good * 100 / total;

    return Math.round(goodPercentage);
  };
  
  handleButtonClick = (e) => {
    const { name } = e.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }))
  };
  
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>      
      </div>
    );
  };
};

export default App;
