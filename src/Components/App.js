import React, { useState } from 'react';
import s from './App.module.css';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [visibleStatistics, setVisibleStatistics] = useState('false');

  const handelBtnClick = event => {
    setVisibleStatistics(true);
    const { target } = event;
    const value = target.textContent.toLowerCase();
    console.log(value);

    switch (value) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return (total === 0 ? 0 : (good / total) * 100).toFixed();
  };

  return (
    <div className={s.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handelBtnClick}
        />
      </Section>

      <Section title={'Statistics'}>
        {visibleStatistics ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback(good, neutral, bad)}
            positivePercentage={countPositiveFeedbackPercentage(
              good,
              neutral,
              bad,
            )}
          />
        ) : (
          <Notification message={'>> No feedback given <<'} />
        )}
      </Section>
    </div>
  );
};
