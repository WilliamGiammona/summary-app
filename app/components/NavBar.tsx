"use client";

import React, { useState } from "react";
import Image from "next/image";
import LoginModal from "../Auth/LoginModal";

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <>
      <nav className="flex justify-between items-center max-w-5xl h-20 mx-auto mb-6">
        <figure className="flex-shrink-0">
          <Image
            src="/assets/Logo-pic.png"
            alt="NavBar Logo"
            width={230}
            height={80}
          />
        </figure>
        <ul className="flex  text-base">
          <li className="mx-4 hover:text-nav-hover transition-colors duration-100">
            <button
              onClick={openLoginModal}
              className="hover:text-nav-hover transition-colors duration-100"
            >
              Login
            </button>
          </li>
          <li className="mx-4 cursor-not-allowed">
            <span>About</span>
          </li>
          <li className="mx-4 cursor-not-allowed">
            <span>Contact</span>
          </li>
          <li className="mx-4 cursor-not-allowed">
            <span>Help</span>
          </li>
        </ul>
      </nav>
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </>
  );
};

export default NavBar;
