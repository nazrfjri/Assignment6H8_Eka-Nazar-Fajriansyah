import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-zinc-200 py-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg">&copy; 2024 E-Cinema. All Rights Reserved.</p>
        </div>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={30} className="hover:text-orange-700" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={30} className="hover:text-orange-700" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="hover:text-orange-700" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} className="hover:text-orange-700" />
          </a>
        </div>
        <div>
          <p className="text-sm">By Eka Nazar Fajriansyah</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
