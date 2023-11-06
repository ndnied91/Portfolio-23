import React, { useEffect, useState, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Filter from '../components/Filter';

import { createClient } from 'contentful';

import PaginateMain from '../components/PaginateMain';

export const loader = async () => {
  const client = createClient({
    space: 'wqwz0wb7zuin',
    environment: 'master',
    accessToken: 'E51PDzhvkvSwEvchteVTDPOxDnSqU2K6EZuX5ouJGlA',
  });

  try {
    const response = await client.getEntries({
      content_type: 'projects',
    });
    const data = response.items.map((item, index) => {
      const {
        image,
        github,
        title,
        url,
        text,
        tags,
        details,
        isFeatured,
        created,
      } = item.fields;
      return {
        image,
        title,
        url,
        github,
        text,
        tags,
        details,
        id: index,
        isFeatured,
        created,
      };
    });

    return { data };
  } catch (error) {
    console.log(error);
    return { error: 'there was an error getting projects :/' };
  }
};

const Project = () => {
  const myRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, error } = useLoaderData();
  const [menuItems, setMenuItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  data.map((i) => Date.parse(i.created));

  data.sort((a, b) => Date.parse(b.created) - Date.parse(a.created));

  const initCategories = () => {
    let all = ['all'];

    data.map(({ tags }) => {
      if (tags) {
        all.push(...tags);
      }
      all = [...new Set(all)];
    });

    return all;
  };

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((item) => {
      if (item.tags) {
        return item.tags.includes(category);
      } else return null;
    });
    setCurrentPage(true);
    setMenuItems(newItems);
    setCurrentPage(1);
  };

  const executeScroll = () => window.scrollTo(0, myRef.current.offsetTop);
  return (
    <div ref={myRef} className="p-10">
      <div className="flex center w-full justify-center">
        <div>
          <h2 className="mb-2 text-xl font-bold">Filter by tool:</h2>
          <Filter
            setCurrentPage={setCurrentPage}
            categories={initCategories()}
            filterItems={filterItems}
            currentPage={currentPage}
          />
        </div>
      </div>

      <section>
        <PaginateMain
          executeScroll={executeScroll}
          data={menuItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </div>
  );
};

export default Project;
