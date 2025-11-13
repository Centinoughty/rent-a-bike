// components/Footer.jsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* License PDF */}
        <Link
          href="/license.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 md:mb-0 hover:text-yellow-400 flex items-center"
        >
          <span className="mr-2 text-xl font-bold">+</span>
          License PDF
        </Link>

        {/* Contact Email */}
        <Link
          href="mailto:contact@yourdomain.com"
          className="mb-4 md:mb-0 hover:text-yellow-400 flex items-center"
        >
          <span className="mr-2 text-xl font-bold">➔</span>
          x8bikes@gmail.com
        </Link>

        {/* Phone Number */}
        <Link
          href="tel:+919876543210"
          className="hover:text-yellow-400 flex items-center"
        >
          <span className="mr-2 text-xl font-bold">⟫</span>
          +91 83300 44119
        </Link>

        {/* Internal Page */}
        <Link href="/about" className="hover:text-yellow-400 ml-4">
          About Us
        </Link>
      </div>

      <div className="text-center text-gray-400 mt-4 text-sm">
        &copy; {new Date().getFullYear()} Your Bike Rental. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
