import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const Modal = ({ setShowModal, item }) => {
  const options = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [
          ...children,
          index > 0 && <br className="p-2" key={index} />,
          textSegment,
        ];
      }, []);
    },
  };

  return (
    <div className="relative z-10 " role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity "></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg self-center">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <h1 className="text-primary capitalize font-bold mb-2">
                      {item.title}
                    </h1>
                  </div>
                  <span className="text-sm text-neutral">
                    {documentToReactComponents(item.details, options)}{' '}
                  </span>

                  <div className="text-center w-full mt-4 mb-2 ">
                    {item.tags.map((item, index) => {
                      return (
                        <span
                          key={index}
                          className=" m-1 p-1 text-center uppercase font-bold"
                        >
                          {' '}
                          {item}{' '}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6 flex justify-between ">
              <div className="flex place-items-center" id="tessst">
                <a
                  href={item.github}
                  className="text-3xl text-secondary mr-2 hover:text-accent duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare />
                </a>

                <a
                  href={item.url}
                  className=" text-3xl text-secondary ml-2 hover:text-accent duration-300 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <TbWorldWww />{' '}
                </a>
              </div>

              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="inline-flex  text-red-700 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
