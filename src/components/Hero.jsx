import { Link } from 'react-router-dom';
import { useFetchProfilePicture } from '../utils/fetchPFP';

import Skills from './Skills';

const Hero = () => {
  const { image } = useFetchProfilePicture();

  return (
    <div className="mt-10 ml-5 mr-5">
      <div className="align-element lg:grid lg:grid-cols-2 items-center gap-8">
        <article className="m-auto md:text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-wider">
            Daniel Niedzwiedzki
          </h1>

          <p className=" mt-2 text-xl capitalize tracking-wide mb-4">
            Software Engineer
          </p>

          <Link
            to="contact"
            className="md:w-2/6 btn lg:w-5/6 bg-primary text-md shadow-md outline-none"
          >
            {' '}
            <p className="capitalize text-xl text-center text-cta">
              Get in Touch{' '}
            </p>
          </Link>
        </article>

        <section className="md:grid grid-cols-2 lg:grid-cols-1 place-items-center md:gap-x-4 ">
          {/* second grid */}
          {image ? (
            <article className="m-auto mt-10 lg:mt-0 flex justify-center md:block ">
              <div className="lg:h-100">
                <img
                  src={image}
                  alt={'profile'}
                  className="md:h-80 max-h-80 object-fill outline outline-base-300 outline-offset-4 rounded-lg mb-0 sm:mb-4"
                />
              </div>
            </article>
          ) : null}

          {/* about me on small / large */}
          <div className="lg:hidden">
            {' '}
            <h1 className="font-bold text-xl pb-2 pt-5 lg:hidden">
              {' '}
              About me
            </h1>{' '}
            <div className="">
              I'm a software engineer with{' '}
              <span>{new Date().getFullYear() - 2016}</span> years of hands-on
              experience in the ever-evolving world of software engineering.
              <div className="p-1" />
              I'm driven by a relentless passion for creating user-centric,
              dynamic web solutions and constantly learning to stay at the
              forefront of this dynamic field, turning innovative ideas into
              beautifully functional websites that leave a lasting digital
              footprint.
            </div>
          </div>
        </section>

        {/* about me on large */}

        <section className="50 bg-base-100 md:col-start-1 md:col-end-3 body hidden lg:block">
          <div className="">
            I'm a software engineer with{' '}
            <span>{new Date().getFullYear() - 2016}</span> years of hands-on
            experience in the ever-evolving world of software engineering. I'm
            driven by a relentless passion for creating user-centric, dynamic
            web solutions and constantly learning to stay at the forefront of
            this dynamic field, turning innovative ideas into beautifully
            functional websites that leave a lasting digital footprint.
          </div>
        </section>
      </div>
      <Skills />
    </div>
  );
};
export default Hero;
