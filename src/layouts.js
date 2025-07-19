import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Layouts({ children }) {
    useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
    
    return(
        <div className="flex flex-col min-h-screen">
            <header className="w-full bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-500 py-6 shadow-lg relative">
                <div className="container mx-auto flex items-center justify-between px-4">
                    <h1 className="text-3xl font-extrabold tracking-wide drop-shadow-lg">
                        <span className="text-gray-700">Micro</span>
                        <span className="text-green-500">_code</span>
                    </h1>
                    <span className="hidden md:inline-block text-xs text-white bg-gradient-to-r from-cyan-400 via-pink-300 to-purple-400 px-4 py-1 rounded-full shadow">Innovation World</span>
                </div>
                <div className="absolute left-0 right-0 bottom-0 h-2 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 opacity-60 blur-sm"></div>
            </header>
            <main className="flex-1">{children}</main>
            <footer className="w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 py-6 mt-8 shadow-lg relative">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                    <span className="text-white text-sm font-semibold">&copy; {new Date().getFullYear()} Micro_code. All rights reserved.</span>
                    <span className="text-cyan-100 text-xs mt-2 md:mt-0 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 px-3 py-1 rounded-full shadow">Empowering businesses with innovation.</span>
                </div>
                <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300 opacity-60 blur-sm"></div>
            </footer>
        </div>
    )
}
export default Layouts;