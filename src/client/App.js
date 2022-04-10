import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Hello from './Hello';
import Navbar from './Navbar';


const App = () => { 
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
    </div>
  );
};

export default App;
