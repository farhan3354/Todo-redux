import React from "react";

export default function Footer() {
  return (
    <>
      {/* Footer - Updated with your info */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Farhan. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Add your social media links */}
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
