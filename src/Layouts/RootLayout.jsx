// src/Layouts/RootLayout.jsx
import React from 'react';
import Galaxy from '../Components/Galaxy';
import Navber from '../Sheard/Navber';
import Footer from '../Sheard/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
  return (
    < >
      <Navber />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;

