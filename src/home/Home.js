import React from 'react';

import Header from '../common/Header.js';
import Background from '../common/Background';
import CenterPane from '../common/CenterPane';

import '../common/background.css';
import './home.css';

import 'bootstrap/dist/css/bootstrap.css';

function Home() {
  return (
    <div>
      <Background></Background>
      <div className="l_header">
        <Header/>
      </div>
      <CenterPane/>
    </div>
  );
}

export default Home;
