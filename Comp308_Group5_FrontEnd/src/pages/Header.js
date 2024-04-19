import React from "react";
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  const handleLogout = () => {
    // Clear sessionStorage
    sessionStorage.clear();
  };

  return (
    <header >
      <Link to="/" className="btn" onClick={handleLogout} color="black">Log out</Link>
    </header>
  );
};

export default DashboardHeader;
