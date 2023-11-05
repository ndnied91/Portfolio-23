import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';

import { links, social } from '../data';

import React, { useState } from 'react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from '@material-tailwind/react';

export default function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {links.map((item, index) => {
        return (
          <Typography
            key={index}
            as="li"
            className="flex items-center gap-x-2 p-1 font-medium "
            onClick={() => setOpenNav(false)}
          >
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? 'capitalize'
                  : isActive
                  ? 'text-hiVis  capitalize'
                  : 'text-accent capitalize'
              }
              to={item.url}
            >
              <div className="flex place-items-center p-1">
                <span className="pr-1">{item.icon} </span>
                <span>{item.text} </span>
              </div>
            </NavLink>
          </Typography>
        );
      })}
    </ul>
  );

  return (
    <Navbar className="mx-auto  border-none max-w-full px-4 py-2 lg:px-8 lg:py-4 bg-neutral">
      <div className="container mx-auto flex items-center justify-between ">
        <Typography className="mr-4 cursor-pointer py-1.5 font-medium ">
          <NavLink to="/" className="font-bold text-2xl">
            <span className="logo text-4xl text-hiVis tracking-[.20em] hover:text-secondary duration-300">
              {'</dn>'}
            </span>
          </NavLink>
        </Typography>
        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="w-6 text-3xl hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-secondary flex place-content-center items-center"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </IconButton>
      </div>
      <Collapse
        open={openNav}
        style={!openNav ? { visibility: 'hidden' } : { visibility: 'visible' }}
      >
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
}
