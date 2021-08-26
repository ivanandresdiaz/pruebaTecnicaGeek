import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to='/auth/login'>ingresar</Link>
    </div>
  );
};

export default LandingPage;
