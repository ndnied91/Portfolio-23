import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChangeThemeModal from '../components/ChangeThemeModal';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <ChangeThemeModal />
      <section>
        <Outlet />
        <Footer />
      </section>
    </>
  );
};

export default HomeLayout;
