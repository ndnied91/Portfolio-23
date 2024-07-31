import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { nanoid } from 'nanoid';

import { MdEmail } from 'react-icons/md';

import { BsCodeSlash, BsFillChatRightDotsFill } from 'react-icons/bs';
import { IoPersonCircleSharp } from 'react-icons/io5';

import HTML from './assets/Icons/FrontEnd/HTML5.svg';
import JS from './assets/Icons/FrontEnd/JavaScript.svg';
import CSS from './assets/Icons/FrontEnd/CSS3.svg';
import React from './assets/Icons/FrontEnd/React.svg';
import jQuery from './assets/Icons/FrontEnd/jQuery.svg';
import Vite from './assets/Icons/FrontEnd/Vite.svg';
import Node from './assets/Icons/FrontEnd/Node.svg';

import D3 from './assets/Icons/Tools/D3.svg';
import Docker from './assets/Icons/Tools/Docker.svg';
import Figma from './assets/Icons/Tools/Figma.svg';
import GitHub from './assets/Icons/Tools/GitHub.svg';

import NPM from './assets/Icons/Tools/NPM.svg';

import Python from './assets/Icons/Tools/Python.svg';

import { GoHomeFill } from 'react-icons/go';

export const links = [
  { id: nanoid(), url: '/', text: 'home', icon: <GoHomeFill /> },
  { id: nanoid(), url: '/projects', text: 'projects', icon: <BsCodeSlash /> },
  {
    id: nanoid(),
    url: 'resume',
    text: 'resume',
    icon: <IoPersonCircleSharp />,
  },
  {
    id: nanoid(),
    url: 'contact',
    text: 'contact',
    icon: <BsFillChatRightDotsFill />,
  },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML',
    image: HTML,
  },
  {
    id: nanoid(),
    title: 'CSS',
    image: CSS,
  },
  {
    id: nanoid(),
    title: 'JS',
    image: JS,
  },
  {
    id: nanoid(),
    title: 'jQuery',
    image: jQuery,
  },
  {
    id: nanoid(),
    title: 'React',
    image: React,
  },
  {
    id: nanoid(),
    title: 'Vite',
    image: Vite,
  },
  // {
  //   id: nanoid(),
  //   title: 'Next',
  //   image: Next,
  // },
  {
    id: nanoid(),
    title: 'Node',
    image: Node,
  },
];

export const tools = [
  {
    id: nanoid(),
    title: 'D3',
    image: D3,
  },
  {
    id: nanoid(),
    title: 'Docker',
    image: Docker,
  },
  {
    id: nanoid(),
    title: 'Figma',
    image: Figma,
  },
  {
    id: nanoid(),
    title: 'GitHub',
    image: GitHub,
  },
  {
    id: nanoid(),
    title: 'Python',
    image: Python,
  },
  {
    id: nanoid(),
    title: 'NPM',
    image: NPM,
  },
];

export const projectData = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];

export const social = [
  {
    id: 2,
    url: 'mailto:danielniedzwiedzki.1@gmail.com',
    icon: <MdEmail />,
  },

  {
    id: 3,
    url: 'https://www.linkedin.com/in/daniel-niedzwiedzki/',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://github.com/ndnied91',
    icon: <FaGithub />,
  },
];
