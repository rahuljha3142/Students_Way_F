import { useState } from 'react'
import Sidebar from './Sidebar';

const MCQGenerator = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
  return (
    <div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="Content" style={{ marginLeft: isOpen ? '270px' : '70px' }}>
            <h1>MCQ Generator</h1>
        </div>
    </div>
  )
}

export default MCQGenerator
