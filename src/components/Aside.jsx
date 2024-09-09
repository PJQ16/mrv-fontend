import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion'; // Import from framer-motion
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import Co2Icon from '@mui/icons-material/Co2';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

const Aside = ({ isOpen }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Animation controls for ExpandMoreIcon
  const controls = useAnimation();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    // Start rotation animation
    controls.start({
      rotate: isDropdownOpen ?  180: 0,
      transition: { duration: 0.3 }
    });
  };

  return (
    <aside className={`fixed inset-y-0 left-0 bg-gradient-to-t  from-orange-500 to-orange-300 text-white w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col`}>
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold ms-4 pr-3">
          <img src='/images/mrv.png' alt="logo"/>
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-4 p-8">
          <li>
            <Link
              to="/"
              className={`block px-5 py-2 rounded-3xl ${currentPath === '/' ? 'border-2 border-white bg-orange-400' : 'border-transparent hover:bg-orange-400'}`}
            >
              <HomeIcon /> Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`block px-5 py-2 rounded-3xl ${currentPath === '/services' ? 'border-2 border-white bg-orange-400' : 'border-transparent hover:bg-orange-400'}`}
            >
              <FlashOnIcon /> Services
            </Link>
          </li>
          <li>
            <button
              onClick={toggleDropdown}
              className={`w-full text-left block px-5 py-2 rounded-3xl flex items-center justify-between ${currentPath.startsWith('/dropdown') ? 'border-2 border-white bg-orange-500' : 'border-transparent hover:bg-orange-400'}`}
            >
              <DescriptionIcon /> Dropdown
              <motion.div
                animate={controls}
                style={{ display: 'inline-block', marginLeft: 8 }}
              >
                <ExpandMoreIcon />
              </motion.div>
            </button>
            {isDropdownOpen && (
              <ul className="space-y-2 mt-2 ml-4">
                <li>
                  <Link
                    to="/dropdown/option1"
                    className={`block px-5 py-2 rounded-3xl ${currentPath === '/dropdown/option1' ? 'border-2 border-white bg-orange-500' : 'border-transparent hover:bg-orange-400'}`}
                  >
                    <LocalGasStationIcon /> Option 1
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dropdown/option2"
                    className={`block px-5 py-2 rounded-3xl ${currentPath === '/dropdown/option2' ? 'border-2 border-white bg-orange-500' : 'border-transparent hover:bg-orange-400'}`}
                  >
                    <Co2Icon /> Option 2
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dropdown/option3"
                    className={`block px-5 py-2 rounded-3xl ${currentPath === '/dropdown/option3' ? 'border-2 border-white bg-orange-500' : 'border-transparent hover:bg-orange-400'}`}
                  >
                    <OilBarrelIcon /> Option 3
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dropdown/option4"
                    className={`block px-5 py-2 rounded-3xl ${currentPath === '/dropdown/option4' ? 'border-2 border-white bg-orange-500' : 'border-transparent hover:bg-orange-400'}`}
                  >
                    <EnergySavingsLeafIcon /> Option 4
                  </Link>
                </li>
              </ul>
            )}
          </li>
          {[...Array(15)].map((_, i) => (
            <li key={i}>
              <Link
                to={`/contact${i}`}
                className={`block px-5 py-2 rounded-3xl ${currentPath === `/contact${i}` ? 'border-2 border-white bg-orange-500' : 'border-transparent hover:bg-orange-400'}`}
              >
                Contact {i + 1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* SVG Wave */}
      <div className="mt-auto">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#FFFFFF" fill-opacity="1" d="M0,128L80,112C160,96,320,64,480,96C640,128,800,224,960,229.3C1120,235,1280,149,1360,106.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>

      <div className=" bg-white text-black">
      <img src='/images/mrv1.png' alt="logo"/> 
      </div>

      <div className="mb-5">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#fff" fill-opacity="1" d="M0,160L24,138.7C48,117,96,75,144,69.3C192,64,240,96,288,133.3C336,171,384,213,432,245.3C480,277,528,299,576,298.7C624,299,672,277,720,256C768,235,816,213,864,213.3C912,213,960,235,1008,218.7C1056,203,1104,149,1152,122.7C1200,96,1248,96,1296,117.3C1344,139,1392,181,1416,202.7L1440,224L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"></path>
</svg>

      </div>
    </aside>
  );
};

export default Aside;
