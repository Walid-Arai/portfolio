"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button, CommonHeading } from "../UI/Button";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { navItems } from "../../data/navbar";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      router.push("/");
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full flex justify-center pt-4 z-50 
        transition-transform duration-300 ease-in-out
        ${hidden ? "-translate-y-10" : "translate-y-0"}`}
      >
        <div
          className={`w-[90%]  backdrop-blur-3xl border border-white/20 rounded-xl px-2 py-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-between transition-all duration-300
          ${isScrolled ? "text-primary bg-white " : "text-white bg-white/10"} `}
        >
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/"  onClick={handleClick}>
            <Image
              src="/images/logo.jpg"
              height={100}
              width={80}
              className="h-10 md:h-18 w-auto rounded-xl"
              alt="Logo"
            />
            </Link>
          </div>
          <div className="hidden lg:block">
            <ul
              className={
                'flex gap-10 font-semibold ${isScrolled ? "text-primary" : "text-white"}'
              }
            >
              {navItems.map((item, index) => (
                <li key={index} className="cursor-pointer hover:opacity-80">
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <Button>Book A Table</Button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-2xl px-3 transition-transform duration-300"
          >
            <i
              className={`fa-solid ${
                open ? "fa-xmark rotate-180" : "fa-bars rotate-0"
              } transition-transform duration-300`}
            />
          </button>

          {/* Mobile Menu */}
          {open && (
            <div className="absolute top-full left-0 w-full mt-3 bg-white text-black rounded-2xl shadow-lg p-6 lg:hidden z-50">
              <ul className="flex flex-col gap-2 text-md">
                {navItems.map((item, index) => (
                  <li key={index} className="cursor-pointer hover:opacity-80 hover:bg-primary hover:text-white pl-5 p-2  rounded-xl">
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 w-full ">
                <Button>Book A Table</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
