import { skills, tools } from '../data';
import { Tooltip, Typography } from '@material-tailwind/react';

import React from 'react';

const renderItems = (data, placement) => {
  return data.map(({ title, image, id }) => {
    if (image) {
      return (
        <Tooltip
          key={id}
          placement={placement}
          className="bg-accent w-20 shadow-xl shadow-black/10 border-none text-center"
          content={
            <div>
              <Typography color="blue-gray" className="font-medium">
                <span> {title} </span>
              </Typography>
            </div>
          }
        >
          <img
            src={image}
            alt={title}
            className="w-8 md:w-12 m-2 cursor-pointer hover:scale-105 duration-300"
          />
        </Tooltip>
      );
    }
  });
};

const Skills = () => {
  return (
    <div>
      <h2
        className="m-4 text-2xl text-center pt-10 border-b border-primary"
        style={{ lineHeight: '0.1rem' }}
      >
        <span className="bg-base-100 p-4 text-secondary"> FREQUENTLY USED</span>
      </h2>
      <section className="md:contents lg:flex lg:justify-evenly ">
        <div className="flex flex-col items-center">
          <p className="mt-5 text-xl uppercase m-3 text-primary"> Languages </p>
          <div className="flex ">{renderItems(skills, 'bottom')}</div>
        </div>

        <div className="flex flex-col items-center">
          <p className="mt-5 text-xl uppercase m-3 text-primary"> Tools </p>
          <div className="flex ">{renderItems(tools, 'bottom')}</div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
