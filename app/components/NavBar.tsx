import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center max-w-5xl h-20 mx-auto">
      <figure className="flex-shrink-0">
        <Image
          src="/assets/Logo-pic.png"
          alt="NavBar Logo"
          width={200}
          height={50}
        />
      </figure>
      <ul className="flex text-nav-default text-base">
        <li className="mx-4 hover:text-nav-hover transition-colors duration-100">
          <Link href="/">Login</Link>
        </li>
        <li className="mx-4 cursor-not-allowed hover:text-nav-default">
          <span>About</span>
        </li>
        <li className="mx-4 cursor-not-allowed hover:text-nav-default">
          <span>Contact</span>
        </li>
        <li className="mx-4 cursor-not-allowed hover:text-nav-default">
          <span>Help</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
