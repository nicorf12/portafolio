const Goals = ({goals}) => {
    const renderDescription = (description) => {
        return description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ));
      };
    
    return (
        <div className="goals" id="goals">
            <h1>{goals.title}</h1>
            {renderDescription(goals.description)}
        </div>
    );
};

export default Goals;