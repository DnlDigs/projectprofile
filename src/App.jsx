import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import Mynavbar from './components/mynavbar';
import Home from './pages/Home';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <Mynavbar />
      <div className="p-4  bg-slate-300 mt-2">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
