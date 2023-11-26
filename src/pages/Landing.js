import React from 'react';

import FeaturedProjects from '../components/FeaturedProjects';

import Hero from '../components/Hero';
import { Link, useLoaderData } from 'react-router-dom';
// import ReactGA from 'react-ga';

const Landing = () => {
  // ReactGA.pageview(window.location.pathname + window.location.search);
  const { data, error } = useLoaderData();

  return (
    <div>
      <Hero />
      <FeaturedProjects projects={data} />

      <section className="text-center m-10 ">
        {' '}
        <Link className="btn bg-primary mb-4 sm:mr-2 mg:mb-0" to="projects">
          {' '}
          <p className="uppercase text-cta">Check out more projects here</p>
        </Link>
        <Link className="btn bg-secondary sm:ml-2" to="resume">
          {' '}
          <p className="uppercase text-cta"> See my journey</p>
        </Link>
      </section>
    </div>
  );
};

export default Landing;
