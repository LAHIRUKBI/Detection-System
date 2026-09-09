'use client';

import { useState } from 'react';
import ESP32Board from '../components/ESP32/ESP32Board';
import PIRSensors from '../components/Sensors/PIRSensors';

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    // h-screen සහ overflow-hidden මගින් Scroll වීම සම්පූර්ණයෙන්ම නවතා ඇත
    <main className={`h-screen overflow-hidden transition-colors duration-500 p-4 font-sans flex flex-col ${isDarkMode ? 'bg-slate-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      
      {/* Dark Mode Toggle Switch */}
      <div className="absolute top-4 right-6 z-50">
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`flex h-8 w-16 items-center rounded-full p-1 transition-colors duration-300 focus:outline-none shadow-inner border ${
            isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-300 border-gray-400'
          }`}
          aria-label="Toggle Dark Mode"
        >
          <div className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${isDarkMode ? 'translate-x-8' : 'translate-x-0'}`}>
            <span className="text-xs">{isDarkMode ? '🌙' : '☀️'}</span>
          </div>
        </button>
      </div>

      {/* Header Section */}
      <header className="mb-2 text-center mt-2 flex-shrink-0">
        <h1 className={`text-2xl font-extrabold transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          System Dashboard
        </h1>
        <p className={`mt-1 text-sm transition-colors duration-500 ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
          Live monitoring of Elephant Detection System
        </p>
      </header>

      {/* Dashboard Layout - SIDE BY SIDE */}
      <div className="flex-1 flex flex-row items-center justify-center gap-6 relative z-10 w-full max-w-[1400px] mx-auto px-4 pb-2">
        
        {/* ESP32 අංශය (වම් පස) */}
        <section className={`w-[400px] transition-opacity duration-300 ${isDarkMode ? 'opacity-95 hover:opacity-100' : ''}`}>
          <ESP32Board />
        </section>

        {/* මැදින් යන සම්බන්ධක වයර් (Animated) */}
        <div className="flex flex-col gap-5 items-center justify-center w-20 relative z-0">
          <div className="w-full h-1.5 bg-orange-500 rounded-full shadow-[0_0_6px_#f97316]"></div>
          <div className="w-full h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e] animate-pulse"></div>
          <div className="w-full h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6] animate-pulse delay-75"></div>
          <div className="w-full h-1.5 bg-teal-400 rounded-full border-b border-dashed border-white shadow-[0_0_8px_#2dd4bf]"></div>
          <div className="w-full h-1.5 bg-stone-700 rounded-full"></div>
        </div>

        {/* Sensors අංශය (දකුණු පස) */}
        <section className={`flex-1 max-w-[800px] transition-opacity duration-300 ${isDarkMode ? 'opacity-95 hover:opacity-100' : ''}`}>
          <PIRSensors />
        </section>
        
      </div>
    </main>
  );
}