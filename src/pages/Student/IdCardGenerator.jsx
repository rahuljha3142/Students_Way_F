// import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';

const IdCardGenerator = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    <div style={{ height: '100vh', marginLeft: isOpen ? '270px' : '70px' }}>
      <iframe
        src="https://idgenerator.onrender.com"
        title="Id Card Generator"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
    </>
  );
};

export default IdCardGenerator;