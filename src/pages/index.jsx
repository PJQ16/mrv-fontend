import React, { useState } from 'react';
import Aside from '../components/Aside';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
import Footer from '../components/Footer';

const Index = () => {
    const [isAsideOpen, setIsAsideOpen] = useState(true);
  
    const toggleAside = () => {
      setIsAsideOpen(!isAsideOpen);
    };
  
    return (
      <div className="flex h-screen">
        <Aside isOpen={isAsideOpen} />
        <div className={`flex-1 flex flex-col transition-all duration-300 ${isAsideOpen ? 'ml-64' : 'ml-0'}`}>
          <Navbar toggleAside={toggleAside} isAsideOpen={isAsideOpen} />
          <div className="flex-1 overflow-auto">
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Index;