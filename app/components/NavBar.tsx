import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center max-w-5xl h-20 mx-auto">
      <figure className="flex-shrink-0">
        <Image
          className="bg-transparent mix-blend-lighten"
          src="/assets/Logo-pic.png"
          alt="NavBar Logo"
          width={200}
          height={50}
        />
      </figure>
      <ul className="flex">
        <li className="mx-8">
          <Link href="/">Login</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="mx-8">
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/about">Help</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
