import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaPaintbrush } from 'react-icons/fa6';
import { createRoutesFromElements } from 'react-router-dom';
import { GiConsoleController } from 'react-icons/gi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const changeTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
};

const randomTheme = () => {
  const themes = [
    'dark',
    'emerald',
    'corporate',
    'synthwave',
    'wireframe',
    'retro',
    'cyberpunk',
    'forest',
    'aqua',
    'pastel',
    'fantasy',
    'black',
    'dracula',
    'cmyk',
    'business',
    'night',
    'coffee',
    'winter',
  ];

  var randomItem = themes[Math.floor(Math.random() * themes.length)];
  return randomItem;
};

const usedThemes = ['corporate', 'dark', 'retro', 'forest'];

const renderThemes = () => {
  return usedThemes.map((item, index) => {
    return (
      <Menu.Item key={index} onClick={(e) => changeTheme(item)}>
        {({ active }) => (
          <p
            className={classNames(
              active
                ? 'bg-gray-100 text-gray-900 capitalize'
                : 'text-gray-700 capitalize',
              'block px-4 py-2 text-sm'
            )}
          >
            {setName(item)}
          </p>
        )}
      </Menu.Item>
    );
  });
};

const setName = (item) => {
  switch (item) {
    case 'corporate':
      return 'Light';
    case 'dark':
      return 'Dark';
    default:
      return item;
    // code block
  }

  return item;
};

const ThemeChanger = ({ setShowTheme }) => {
  return (
    <Menu as="div" className="relative inline-block text-left bg-transparent">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-hiVis shadow-sm ring-inset hover:opacity-80 ">
          <FaPaintbrush className="text-base" />

          <ChevronDownIcon className="-mr-1 h-5 w-5 " aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <section className="py-1">
            {/* <Menu.Item onClick={(e) => handleChange('dark')}>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Dark
                </p>
              )}
            </Menu.Item>
            <Menu.Item onClick={(e) => changeTheme('light')}>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Light
                </p>
              )}
            </Menu.Item>
            <Menu.Item onClick={(e) => changeTheme('pastel')}>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  lofi
                </p>
              )}
            </Menu.Item>
            <Menu.Item onClick={(e) => changeTheme('retro')}>
              {({ active }) => (
                <p
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Retro
                </p>
              )}
            </Menu.Item> */}
            {renderThemes()}
          </section>

          <div className="py-1">
            <Menu.Item onClick={(e) => changeTheme(randomTheme())}>
              {({ active }) => (
                <p
                  className={classNames(
                    active
                      ? 'bg-gray-100  text-gray-900 capitalize'
                      : 'text-gray-700 ',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Random!
                </p>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ThemeChanger;
