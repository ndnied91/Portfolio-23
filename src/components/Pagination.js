import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { usePagination } from './usePagination';
const Pagination = (props) => {
  // const scrollToTop = useRef(null);
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
    props.executeScroll();
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
    props.executeScroll();
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <div>
      <section className="flex justify-center  place-items-center">
        <div
          className={`${
            currentPage === 1
              ? 'pointer-events-none '
              : 'flex justify-center font-bold cursor-pointer'
          } `}
          onClick={onPrevious}
        >
          <div className="opacity-90 m-5 text-3xl font-bold text-primary hover:opacity-100 duration-300">
            <FiArrowLeft />
          </div>
        </div>
        {paginationRange.map((pageNumber) => {
          return (
            <div
              key={pageNumber}
              className={`${
                pageNumber === currentPage
                  ? 'text-red-400 m-5 cursor-pointer'
                  : 'm-5 cursor-pointer'
              } `}
              onClick={() => {
                onPageChange(pageNumber);
                props.executeScroll();
              }}
            >
              {pageNumber}
            </div>
          );
        })}
        <div
          className={`${
            currentPage === lastPage ? 'pointer-events-none' : null
          } `}
          onClick={onNext}
        >
          <div className="opacity-90 m-5 text-3xl font-bold text-primary hover:opacity-100 duration-300">
            <FiArrowRight className="" />
          </div>
        </div>
      </section>
      {currentPage === lastPage ? (
        <div className="text-center hover:scale-105 duration-300">
          {' '}
          <a
            href="https://github.com/ndnied91?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Check out more projects on GitHub
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
