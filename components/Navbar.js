"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Hamburger from "./Hamburger";


const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Beranda", link: "/" },
    { name: "testimoni", link: "/#about" },
    { name: "Favorit anda", link: "/#favorit" },
  ];
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] md:px-24 ${
        sticky
          ? "p-2 bg-white/90 text-black w-full fixed md:drop-shadow-md"
          : "p-2 bg-transparent text-black w-full fixed"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <a href="/" className="flex items-center justify-start uppercase text-2xl md:text-3xl font-bold hover:text-orange-500">
            jan<span className="w-60 text-orange-500 hover:text-black">cook</span>
          </a>
        </div>
        <div className="container flex justify-between h-16 mx-auto md:justify-end md:space-x-8">
          <ul className="items-stretch hidden space-x-3 md:flex">
            {menuLinks?.map((menu, index) => (
              <li className="flex" key={index}>
                <Link
                  rel="noopener noreferrer"
                  className="flex items-center px-4 mb-1 border-b-2 border-transparent hover:text-orange-500 uppercase"
                  href={menu.link}
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={` ${sticky ? "hidden" : "block"} `}>
          <div
            onClick={() => setOpen(!open)}
            className={`z-[999] ${
              open ? "text-black" : "text-black"
            } text-3xl md:hidden m-5`}
          >
        <Hamburger />
          </div>
        </div>
        <div className={` ${sticky ? "block" : "hidden"} `}>
          <div
            onClick={() => setOpen(!open)}
            className={`z-[999] ${
              open ? "text-black" : "text-black"
            } text-3xl md:hidden m-5`}
          >
            <Hamburger />
          </div>
        </div>
        <div
          className={`${
            sticky
              ? "md:hidden ml-0 text-black fixed w-full px-7 py-8 font-medium bg-white/70 top-0 duration-300"
              : "md:hidden ml-0 text-black fixed w-full px-7 py-8 font-medium bg-white/70 top-0 duration-300"
          } ${open ? "top-0" : "top-[-100%]"}`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg uppercase">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-gray-400"
              >
                <a href={menu?.link}>{menu?.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
