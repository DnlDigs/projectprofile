import React from 'react';
import {  Routes, Route } from 'react-router-dom'
import Mynavbar from './components/mynavbar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import './index.css'


function App() {
  return (
    <>
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 animate-gradient text-white">
      {/* Soft gradient blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/30 via-blue-700/20 to-indigo-700/30 blur-2xl z-0"></div>

      {/* Foreground content (nav + pages) */}
      <div className="relative z-10">
        <Mynavbar />

        <div className="mt-4 px-4"> {/* Add top margin and horizontal padding */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </div>
      
    </>
  );
}

export default App;
