import React from 'react';
import './projectCard.css';
import Label from './Label';
import Button from './Button';

const ProjectCard = ({ title, description, labels, buttonText, className, isSelected, onClick }) => {
  return (
    <div 
      className={`project-card ${isSelected ? 'expanded' : ''}`} // Añadimos clase 'expanded' si está seleccionado
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='labels-container'>
      {
        labels.map((label, index) => (
          <Label key={index} text={label} />
        ))
      }
      </div>
      <Button children={buttonText} className={className}></Button>
    </div>
  );
};

ProjectCard.defaultProps = {
  labels: [''], // Valor predeterminado para labels
  className: '',
  isSelected: false,
};

export default ProjectCard;
