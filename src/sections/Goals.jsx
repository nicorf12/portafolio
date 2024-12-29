import React from 'react';

const Goals = ({goals}) => {
    return (
        <div className="goals" id="goals">
            <h1>{goals.title}</h1>
            <p>{goals.description}</p>
        </div>
    );
};

export default Goals;