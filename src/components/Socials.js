import React from 'react';
import { social } from '../data';

const Socials = () => {
  const renderIcons = () => {
    return social.map((item) => {
      return (
        <div key={item.id}>
          <a
            className="h-48 text-5xl lg:text-7xl cursor-pointer hover:text-primary duration-300 "
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
          >
            {item.icon}{' '}
          </a>
        </div>
      );
    });
  };

  return (
    <div className="h-44 mt-6">
      <p className="text-2xl lg:text-3xl text-secondary text-center font-bold">
        {' '}
        Connect with me!
      </p>

      <div className="flex justify-center gap-14 mt-2"> {renderIcons()} </div>
    </div>
  );
};

export default Socials;
