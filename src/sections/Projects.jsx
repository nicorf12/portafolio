import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import SelectedProject from "../components/SelectedProject";
import './projects.css'


const Projects = ({projectList}) => {
  const [selectedProject, setSelectedProject] = useState(null); // Estado para gestionar el proyecto seleccionado
  
  const handleClick = (index) => {
    setSelectedProject(index === selectedProject ? null : index); // Alternar la selección
  };

  return (
    <div className="projects" id="projects">
      <h1>Proyectos</h1>
      <div className="project-focus-container">
        {selectedProject !== null && (
          <SelectedProject 
            selectedProject={projectList[selectedProject]}
            images={projectList.images}/> // Mostrar el componente SelectedProject si hay un proyecto seleccionado
        )}
      </div>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            labels={project.labels}
            buttonText={project.buttonText}
            className={project.className}
            isSelected={selectedProject === index} // Determinar si este proyecto está seleccionado
            onClick={() => handleClick(index)} // Llamar al manejador de clic
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
