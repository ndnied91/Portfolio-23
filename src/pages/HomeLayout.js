import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChangeThemeModal from '../components/ChangeThemeModal';
import ChatBotBtn from '../components/ChatBotBtn';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <ChangeThemeModal />
      <section>
        <Outlet />
        <Footer />
        <ChatBotBtn />
      </section>
    </>
  );
};

export default HomeLayout;
