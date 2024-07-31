import { Duties } from './Duties';

export const JobInfo = ({ jobs, currentItem }) => {
  return (
    <article className="job-info ">
      <h3>{jobs[currentItem].title}</h3>
      <span className="job-company">{jobs[currentItem].company}</span>
      <p className="job-date">{jobs[currentItem].dates}</p>
      <Duties duties={jobs[currentItem].duties} />
    </article>
  );
};

export default JobInfo;
