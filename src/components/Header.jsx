import React from 'react';
import { Mail } from 'lucide-react';
import logo from '../assets/public/logo.png';

const Header = () => {
    return (
        <header className="fixed top-0 w-full left-0 flex items-center justify-between py-2 px-5 border-b border-gray-300 z-10 h-14 bg-gradient-to-r from-sky-500 rounded-b-full to-indigo-500 shadow-lg">
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Company Logo" className="h-20 w-auto ml-20" />
            </div>
            <div className="text-right mr-20">
               <p className="flex items-center ">
                    <Mail className="h-4 w-4 mr-1 " />
                    bolatito224@gmail.com
                </p>
            </div>
        </header>
    );
};

export default Header;
