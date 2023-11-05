import { v4 as uuidv4 } from 'uuid';
import { FaAngleDoubleRight } from 'react-icons/fa';

export const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((i) => {
        const id = uuidv4();
        return (
          <div key={id} className="job-desc">
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{i}</p>
          </div>
        );
      })}
    </div>
  );
};
