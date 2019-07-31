import React from 'react';

// Import Pages for the Application

import Home from "./home/Home";

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { isCompletionStatement } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
