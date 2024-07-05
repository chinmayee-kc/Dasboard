import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const RatingComponent = () => {
  const ratings = {
    Hygiene: 85,
    FoodTaste: 85,
    Packaging: 92,
  };

  const colors = {
    Hygiene: '#6A4FC8',
    FoodTaste: '#FF9900',
    Packaging: '#40C1D3',
  };

  return (
    <div className="rating-container">
      <h2>Your Rating</h2>
      <p>Lorem ipsum dolor sit amet, consectetur</p>
      <div className="circular-bars">
        {Object.keys(ratings).map((key, index) => (
          <div
            className={`circular-bar circular-bar-${index}`}
            key={key}
          >
            <CircularProgressbar
              value={ratings[key]}
              text={`${ratings[key]}%`}
              styles={buildStyles({
                textSize: '16px',
                pathColor: colors[key],
                textColor: colors[key],
              })}
            />
            <div className="label">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingComponent;
