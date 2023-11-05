import React from 'react';
import ProjectsCard from './ProjectsCard';

const FeaturedProjects = ({ projects }) => {
  return (
    <div className="m-5">
      <h2
        className="m-4 text-2xl text-center pt-10 border-b border-primary"
        style={{ lineHeight: '0.1rem' }}
      >
        <span className="bg-base-100 p-4 text-secondary "> LATEST WORK </span>
      </h2>
      <div
        className="m-10 lg:m-38 lg:mt-6 md:m-40 md:mb-4
       mt-0 py-0 grid lg:grid-cols-2 xl:grid-cols-3 gap-8 pt-4"
      >
        {projects.map((project) => {
          if (project.isFeatured) {
            return (
              <ProjectsCard
                id="featured"
                key={project.id}
                image={project.image}
                title={project.title}
                text={project.text}
                github={project.github}
                url={project.url}
                details={project.details}
                tags={project.tags}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FeaturedProjects;
