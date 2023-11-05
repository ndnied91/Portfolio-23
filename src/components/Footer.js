import React from 'react';

import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral mt-auto">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex  px-5 py-5 lg:py-6  dark:bg-neutral md:flex md:items-center md:justify-between sm:items-center justify-between">
          <div className="text-sm sm:text-center flex text-hiVis">
            Daniel Niedzwiedzki © 2023
          </div>
          <div className="flex space-x-5 sm:justify-center md:mt-0 ">
            <a
              href="https://www.instagram/daniel-niedzwiedzki/"
              className=" text-hiVis opacity-90 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />

              <span className="sr-only">Instagram page</span>
            </a>
            <a
              href="https://github.com/ndnied91"
              className="flex  text-hiVis opacity-90 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />

              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://www.instagram/daniel-niedzwiedzki/"
              className=" text-hiVis opacity-90 hover:opacity-100"
              target="_blank"
              rel="noreferrer"
            >
              <BsInstagram />

              <span className="sr-only">Instagram account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
