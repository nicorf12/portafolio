import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SelectedProject from "../components/SelectedProject";
import './projects.css'


const Projects = ({projects}) => {
  const [selectedProject, setSelectedProject] = useState(null); // Estado para gestionar el proyecto seleccionado
  
  const handleClick = (index) => {
    setSelectedProject(index === selectedProject ? null : index); // Alternar la selección
  };
  
  return (
    <div className="projects" id="projects">
      <h1>{projects.title}</h1>
      <div className="project-focus-container">
        {selectedProject !== null && (
          <SelectedProject 
            selectedProject={projects.projectsList[selectedProject]}
            images={projects.projectsList.images}/>
        )}
      </div>
      <div className="projects-container">
        {projects.projectsList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            labels={project.labels}
            buttonText={project.buttonText}
            className={project.className}
            isSelected={selectedProject === index}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
