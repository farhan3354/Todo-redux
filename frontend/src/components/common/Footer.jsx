import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-gray-50 py-6 mt-10">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-800">
          <p>© 2026 AirbnbClone, Inc.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span className="hover:underline cursor-pointer">Terms</span>
            <span className="hover:underline cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
