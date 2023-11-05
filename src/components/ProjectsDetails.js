import ProjectsCard from './ProjectsCard';

const ProjectsDetails = ({ projects }) => {
  if (projects) {
    return (
      <section className="py-20 align-element">
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => {
            return <ProjectsCard key={project.id} {...project} />;
          })}
        </div>
      </section>
    );
  }
};
export default ProjectsDetails;
