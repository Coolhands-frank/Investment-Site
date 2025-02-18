'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SideBar from './Sidebar';
import ProfileDrawer from './ProfileDrawer';
import { CogIcon } from '@heroicons/react/24/solid';

const DashboardNavBar = () => {

  const [isProfileDrawer, setIsProfileDrawer] = useState(false)
  
  const handleProfileToggle = () => {
    setIsProfileDrawer(!isProfileDrawer);
  };

  return (
    <>
      <div className="hidden h-full md:w-1/4 md:mx-4 lg:max-w-sm text-white md:flex flex-col justify-between items-center">
        <SideBar />
      </div>

      <div className="md:hidden bg-orange-500 py-4 px-8 flex flex-row justify-between items-center">
        <button className="border rounded-full w-8 h-8 bg-gray-100" onClick={handleProfileToggle}>
          
        </button>
        <Link className="rounded-full text-white hover:bg-gray-700 transition duration-200" href="#">
            <CogIcon className="h-8 w-8" />
        </Link>
        <ProfileDrawer isOpen={isProfileDrawer} onClose={handleProfileToggle} />
    </div>
    </>
  );
};

export default DashboardNavBar;
