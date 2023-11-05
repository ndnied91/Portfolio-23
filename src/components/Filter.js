import React, { useState } from 'react';

const Filter = ({ categories, filterItems, setCurrentPage }) => {
  const [selected, setSelected] = useState(0);

  const handleColor = (item) => {
    setSelected(item);
    filterItems(item);
  };

  const resetCurrentPage = (item) => {
    filterItems(item);
    setCurrentPage(1);
  };

  const renderButtons = () => {
    return categories.map((list) => {
      if (list === 'all') {
        return (
          <button
            key={list}
            className={`btn btn-accent m-1 lg:m-2 ${
              list === selected ? 'btn btn-secondary' : ''
            } `}
            onClick={() => resetCurrentPage(list)}
          >
            {list}
          </button>
        );
      } else {
        return (
          <button
            key={list}
            className={`btn btn-primary m-1 lg:m-2 ${
              list === selected ? 'btn btn-secondary' : ''
            } `}
            onClick={() => handleColor(list)}
          >
            {list}
          </button>
        );
      }
    });
  };

  return (
    <div className="grid grid-cols-3 md:flex md:flex-row flex-wrap md:justify-center">
      {/* {categories.map((list) => (
        <button
          key={list}
          className={`btn btn-primary m-1 lg:m-2 ${
            list === selected ? 'btn btn-secondary' : ''
          } `}
          onClick={() => handleColor(list)}
        >
          {list}
        </button>
      ))} */}
      {renderButtons()}
    </div>
  );
};

export default Filter;
