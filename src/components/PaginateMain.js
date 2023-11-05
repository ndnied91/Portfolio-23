import React, { useMemo } from 'react';

import ProjectsCard from './ProjectsCard';
import Pagination from '../components/Pagination';

let PageSize = 6;

const PaginateMain = ({ data, currentPage, setCurrentPage }) => {
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data]);

  return (
    <section className="md:py-20 md:align-element">
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {currentTableData.map((item) => {
          return (
            <section key={item.id}>
              <ProjectsCard {...item} />
            </section>
          );
        })}
      </div>

      <section className="">
        <Pagination
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </section>
    </section>
  );
};

export default PaginateMain;
