import React, { useState } from 'react';
import NavBar from './NavBar';





function Dashboard() {
    const [currentPage, setCurrentPage] = useState('Home');
 
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />

      </div>
    );
  }

export default Dashboard;