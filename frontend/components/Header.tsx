import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserCircle } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full fixed top-0 bg-white z-50 h-6" role="banner">
      <div className="text-center mb-4 p-3 sm:p-4 border-b border-gray-300 relative">
        <Link 
          href="/" 
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          aria-label="Go to home page"
          role="button"
          title="Home"
        >
          <Image
            src="/eduhub.png"
            alt="EduHub Logo"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
