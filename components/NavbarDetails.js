"use client"
import React, { useEffect, useState } from "react";

const NavbarDetails = () => {
  const [sticky, setSticky] = useState(false);
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
          <a href="/" className="flex items-center justify-start uppercase text-2xl md:text-3xl font-bold hover:text-orange-500 h-16">
            jan<span className="w-60 text-orange-500 hover:text-black">cook</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDetails;
