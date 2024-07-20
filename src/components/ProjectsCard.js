import { useState } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import OutsideClickHandler from 'react-outside-click-handler';

import Modal from './Modal';

const ProjectsCard = ({
  url,
  image,
  github,
  title,
  text,
  details,
  tags,
  created,
}) => {
  const [showModal, setShowModal] = useState();

  return (
    <div>
      <article
        className=" bg-base-300 rounded-lg shadow-md hover:shadow-xl hover:scale-[101%] duration-300 cursor-pointer md:min-h-[445px]"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img
          src={image?.fields?.file?.url || null}
          alt={title}
          className="w-full object-cover md:h-64 p-3 rounded-3xl sm:h-48"
        />
        <div className="capitalize pt-2 pb-4 pl-4 pr-4 ">
          <h2 className="text-xl tracking-wide font-medium text-base-900">
            {title}
          </h2>
          <p className="text-sm mt-1 base-100-primary leading-loose">{text}</p>
          <div className="mt-4 flex gap-x-4">
            {url ? (
              <a href={url} target="_blank" rel="noreferrer">
                <TbWorldWww className="h-8 w-8  hover:text-accent duration-300" />
              </a>
            ) : null}

            {github !== undefined ? (
              <a href={github} target="_blank" rel="noreferrer">
                <FaGithubSquare className="h-8 w-8 text-primary-900 hover:text-accent duration-300 " />
              </a>
            ) : null}
          </div>
        </div>
      </article>

      {/* modal for item */}
      {showModal ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="">
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              item={{ url, image, github, title, text, details, tags }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default ProjectsCard;
