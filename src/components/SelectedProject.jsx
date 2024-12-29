import React from 'react';
import PropTypes from 'prop-types';
import './SelectedProject.css';

const SelectedProject = ({ selectedProject }) => {
  return (
    <div className="project-focus">
      <h2>{selectedProject.title}</h2>
      <p>{selectedProject.description}</p>
      <div className="image-container">
        {selectedProject.images.map((image, index) => (
          <img key={index} src={'./src/assets/'+image} alt={`Project image ${index + 1}`} />
        ))}
      </div>
      <div className="extra-details">
        <p>Detalles adicionales del proyecto...</p>
      </div>
    </div>
  );
};

SelectedProject.propTypes = {
  selectedProject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectedProject;