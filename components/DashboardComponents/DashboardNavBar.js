'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SideBar from './Sidebar';
import MobileDrawer from '../NavComponents/MobileDrawer';
import Image from 'next/image';
import { CogIcon } from '@heroicons/react/24/solid';

const DashboardNavBar = () => {

  const [isToggleDrawer, setIsToggleDrawer] = useState(false)
  
  const handleDrawerToggle = () => {
    setIsToggleDrawer(!isToggleDrawer);
  };

  return (
    <>
      <div className="hidden h-full md:w-1/4 lg:max-w-sm text-white md:flex flex-col justify-between items-center">
        <SideBar />
      </div>

      <div className="md:hidden bg-orange-500 py-4 px-8 flex flex-row justify-between items-center">
        <button className="border rounded-full w-8 h-8 bg-gray-100" onClick={handleDrawerToggle}>
          
        </button>
        <Link className="rounded-full text-white hover:bg-gray-700 transition duration-200" href="#">
            <CogIcon className="h-8 w-8" />
        </Link>
        <MobileDrawer isOpen={isToggleDrawer} onClose={handleDrawerToggle} />
    </div>
    </>
  );
};

export default DashboardNavBar;
