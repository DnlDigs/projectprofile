import React from "react";
import './pg.css'

import AboutMe from "../components/AboutMe";
import Skills from "./Skills";

function Home () {

    return (

    <main className="min-h-screen text-gray-800 dark:text-gray-100">
      {/* About Me Section with Gradient & Fade-in */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-white to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        {/* Texture Overlay (optional) */}
        <div className="absolute inset-0 bg-[url('./assets/noise-texture.png')] opacity-5 dark:opacity-10 pointer-events-none"></div>
        <div
          className="max-w-7xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.1s", animationDuration: "0.8s" }}
        >
          <AboutMe />
        </div>
      </section>

      {/* Skills Section with a darker gradient & fade-in */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden mt-5">
        <div className="absolute inset-0 bg-[url('./assets/noise-texture.png')] opacity-5 dark:opacity-10 pointer-events-none"></div>
        <div
          className="max-w-7xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s", animationDuration: "0.8s" }}
        >
          <Skills />
        </div>
      </section>
    </main>

      
       
    );

}

export default Home