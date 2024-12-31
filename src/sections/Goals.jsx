import React from 'react';

const Goals = ({goals}) => {
    const renderDescription = (description) => {
        return description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ));
      };
    
    return (
        <div className="goals" id="goals">
            <h1>{goals.title}</h1>
            <p>{renderDescription(goals.description)}</p>
        </div>
    );
};

export default Goals;