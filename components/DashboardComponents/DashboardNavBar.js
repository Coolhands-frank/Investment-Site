'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SideBar from './Sidebar';
import ProfileDrawer from './ProfileDrawer';
import { CogIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';

const DashboardNavBar = () => {

  const [isProfileDrawer, setIsProfileDrawer] = useState(false)
  
  const handleProfileToggle = () => {
    setIsProfileDrawer(!isProfileDrawer);
  };

  return (
    <div>
      <div className="hidden md:flex justify-between items-center h-full md:w-1/4 md:mx-4 lg:max-w-sm text-white">
        <SideBar />
      </div>

      <div className="md:hidden bg-orange-500 py-4 px-8 flex flex-row justify-between items-center">
        
        <div className="cursor-pointer flex gap-1 items-center" onClick={handleProfileToggle}>
          <UserCircleIcon className="h-10 w-10 text-orange-100 md:hover:text-orange-800"/>
          <p className="text-orange-100 text-base font-semibold md:hover:text-orange-800">Profile</p>
        </div>

        <Link className="rounded-full text-orange-100 hover:text-orange-800 transition duration-200" href="/dashboard/settings">
            <CogIcon className="h-8 w-8" />
        </Link>
        <ProfileDrawer isOpen={isProfileDrawer} onClose={handleProfileToggle} />
      </div>
    </div>
  );
};

export default DashboardNavBar;
