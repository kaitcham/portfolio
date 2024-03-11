import React from 'react';
import Wrapper from './ProjectsStyles';
import projects from '../../utils/projects';

const Projects = () => {
  const string = 'Projects';
  return (
    <Wrapper id="projects" className="container">
      <h2>{string}</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <div className="project_img">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project_details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                )}
                <a href={project.preview} target="_blank" rel="noreferrer">
                  Preview
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Projects;
