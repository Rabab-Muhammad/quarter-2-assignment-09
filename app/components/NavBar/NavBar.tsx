"use client";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const togglemenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="flex justify-between items-center p-5 bg-blue-950    text-gray-200 px-5 sticky top-0 z-20">
      <div className="text-3xl font-bold">Data Fetching</div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6 text-xl text-gray-200 font-bold">
        <Link
          href={"/"}
          onClick={closeMenu}
          className="transform transition duration-300 hover:scale-105"
        >
          Home
        </Link>
        <Link
          href={"/client-side"}
          onClick={closeMenu}
          className="transform transition duration-300 hover:scale-105"
        >
          Client-Side
        </Link>
        <Link
          href={"/server-side"}
          onClick={closeMenu}
          className="transform transition duration-300 hover:scale-110"
        >
          Server-Side
        </Link>
      </nav>

      {/* Mobile nav Hamburger menu */}
      <div className="md:hidden flex  items-center">
        <HiMenuAlt3
          className="text-white text-3xl cursor-pointer"
          onClick={togglemenu}
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? `block` : `hidden`
        } absolute top-0 left-0 w-full h-full  bg-blue-950 p-5 md:hidden z-20`}
      >
        {/* Close button */}
        <div className="flex justify-end">
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={togglemenu}
          />
        </div>
        <nav className="flex flex-row items-center gap-3 text-lg text-gray-200 font-bold ">
          <Link href={"/"} onClick={closeMenu}>
            Home
          </Link>
          <Link href={"/client-side"} onClick={closeMenu}>
            Client-Side
          </Link>
          <Link href={"/server-side"} onClick={closeMenu}>
            Server-Side
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
