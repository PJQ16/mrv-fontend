import React, { useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleAside }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white  text-black p-4 flex justify-between items-center relative ">
      <button onClick={toggleAside} className="text-2xl focus:outline-none">
        <MenuIcon/>
      </button>
      <div className="relative">
        <button 
          onClick={handleDropdownToggle} 
          className="text-xl font-bold flex items-center focus:outline-none"
        >
          <SettingsIcon />
          <svg 
            className={`ml-2 w-4 h-4 transition-transform  ${isDropdownOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48  bg-orange-500 text-gray-800 rounded-lg shadow-lg">
            <ul>
              <li><a href="#profile" className="block text-white px-4 py-2 hover:bg-orange-700"><AccountCircleIcon/> Profile</a></li>
              <li><a href="#settings" className="block text-white px-4 py-2 hover:bg-orange-700"><BuildCircleIcon/> Settings</a></li>
              <li><Link  to='/login' className="block text-white px-4 py-2 hover:bg-orange-700"><MeetingRoomIcon/> Logout</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
