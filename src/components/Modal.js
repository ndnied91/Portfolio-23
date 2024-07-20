import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import OutsideClickHandler from 'react-outside-click-handler';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-30">
      <OutsideClickHandler onOutsideClick={() => setShowModal(false)}>
        <div className="relative z-10 w-full max-w-2xl mx-auto p-4">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="bg-white pb-0 pt-5 sm:p-6 sm:pb-2">
              <div className="sm:flex sm:items-start">
                <div className="w-full mt-3 text-center sm:mt-0 sm:text-left pl-4 pr-4 md:pl-0 md:pr-0">
                  <div className="">
                    <h1 className="text-primary capitalize font-bold mb-2">
                      {item.title}
                    </h1>
                  </div>
                  <span className="text-sm text-neutral">
                    {documentToReactComponents(item.details, options)}
                  </span>

                  <div className="text-center w-full mt-4 mb-2 flex flex-wrap justify-center">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="m-0.5 p-0.5 text-center uppercase font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6 flex justify-between">
              <div className="flex place-items-center">
                {item.github && (
                  <a
                    href={item.github}
                    className="text-3xl text-secondary mr-2 hover:text-accent duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithubSquare />
                  </a>
                )}
                {item.url && (
                  <a
                    href={item.url}
                    className="text-3xl text-secondary ml-2 hover:text-accent duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TbWorldWww />
                  </a>
                )}
              </div>
              <button
                onClick={() => setShowModal(false)}
                type="button"
                className="inline-flex text-red-700 justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Modal;
