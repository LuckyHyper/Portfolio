import React from 'react';
import Main from './Main';
import Navbar from '../components/Navbar';
import Expertise from './Expertise';
import './Home.css';
import Work from '../components/Work';

function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Expertise />
      <Work />
    </div>
  );
}

export default Home;
