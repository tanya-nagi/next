"use client";

import React, { useState, useRef, useEffect, useReducer } from "react";

import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LinkAtom from "../atoms/link";
import Image from "next/image";
import { ButtonAtom } from "../atoms/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const [mobileNav, toggleMobileNav] = useReducer((s) => !s, false);
  const [isNavFixed, setisNavFixed] = useState(false);
  const [isOpen, toggleState] = useReducer((s) => !s, false);

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDropdown = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  const dropdownRef = useRef<any>();
  const solutionsRef = useRef<any>();

  const navigate = useRouter();

  const headerWrapperRef = useRef(null);

  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mobileNav]);

  const handleScroll = () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 80) {
      setisNavFixed(true);
      setIsOpenMenu(false);
    } else {
      setisNavFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const showAnim = gsap
      .from(headerWrapperRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.2,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self: any) => {
        if (self.direction === -1) {
          showAnim.play();
        } else {
          showAnim.reverse();
        }
      },
    });
  });

  const closeDropdown = () => {
    setIsOpenMenu(false);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !solutionsRef.current.contains(e.target)
      ) {
        setIsOpenMenu(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpenMenu]);

  // Attach a click event listener to the document

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpenMenu]);

  return (
    <nav>
      <div
        ref={headerWrapperRef}
        className={`${
          isNavFixed ? "shadow-header" : ""
        } z-[9999] fixed top-0 left-0 right-0`}
      >
        <div className="xl:flex hidden bg-blue pt-1 2xl:pb-[6px] pb-[5px] z-50">
          <div className="flex w-container h-full 2xl:gap-14 gap-10 items-center justify-end m-auto">
            <LinkAtom text="About AAK" href="/" theme="white" size="base" />
            <LinkAtom
              text="Working at AAK"
              href="/"
              theme="white"
              size="base"
            />
            <LinkAtom
              text="Newsroom"
              href="/newsroom"
              theme="white"
              size="base"
            />
            <LinkAtom text="Global" href="/" theme="white" size="base" />
            <LinkAtom text="Search" href="/" theme="white" size="base" />
          </div>
        </div>

        <div className="bg-[#fff] backdrop-blur-2xl shadow">
          <div className="w-container flex items-center justify-between 2xl:gap-16 xlg:gap-8 gap-5 ">
            <div className="flex items-center 2xl:gap-8 gap-4 xl:py-0 py-2 ">
              <Link href="/">
                <Image
                  src="/assets/aak-logo.svg"
                  alt="AAK logo"
                  width="100"
                  height="0"
                  className="object-contain 2xl:mr-14 mr-5 h-8 sm:h-10 xlg:h-[45px] w-auto"
                />
              </Link>

              {/* desktop header */}
              <div className="xl:flex hidden 2xl:gap-8 gap-4">
                <LinkAtom
                  text="Co-development"
                  href="/co-development"
                  theme="blue"
                  size="base"
                  className="h-[70px] flex items-center"
                />
                <div className="group h-[70px] flex items-center industries">
                  <div className="flex items-center transition-all duration-200 group-hover:opacity-50">
                    <LinkAtom
                      text="Industries"
                      href="/industries"
                      theme="blue"
                      size="base"
                      hover={false}
                    />
                    <svg
                      className="h-5 fill-blue "
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                    </svg>
                  </div>
                  {/* industry-dropdown-menu  */}
                  <div className="industry-menu group-hover:block hidden absolute top-full left-0 right-0 overflow-hidden">
                    <div className="flex justify-center group-hover:animate-fade-300 bg-blue p-14 pb-20">
                      <div className="grid grid-cols-2 gap-y-10 gap-x-20">
                        <LinkAtom
                          text="Bakery"
                          href="/industries/bakery"
                          theme="white"
                          size="lg"
                          className="group-hover:animate-fade-600"
                        />
                        <LinkAtom
                          text="Bakery"
                          href="/industries/bakery"
                          theme="white"
                          size="lg"
                          className="group-hover:animate-fade-600"
                        />
                        <LinkAtom
                          text="Bakery"
                          href="/industries/bakery"
                          theme="white"
                          size="lg"
                          className="group-hover:animate-fade-600"
                        />
                        <LinkAtom
                          text="Chocolate & Confectionary"
                          href="/industries/chocolate-and-confectionary"
                          theme="white"
                          size="lg"
                          className="group-hover:animate-fade-600"
                        />
                        <LinkAtom
                          text="Chocolate & Confectionary"
                          href="/industries/chocolate-and-confectionary"
                          theme="white"
                          size="lg"
                          className="group-hover:animate-fade-600"
                        />
                        <LinkAtom
                          text="Chocolate & Confectionary"
                          href="/industries/chocolate-and-confectionary"
                          theme="white"
                          size="lg"
                          className="group-hover:animate-fade-600"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <LinkAtom
                  text="Stories of Impact"
                  href="/"
                  theme="blue"
                  size="base"
                  className="h-[70px] flex items-center"
                />
                <LinkAtom
                  text="Sustainability"
                  href="/"
                  theme="blue"
                  size="base"
                  className="h-[70px] flex items-center"
                />
                <LinkAtom
                  text="Manufacturing & Supply Chain"
                  href="/"
                  theme="blue"
                  size="base"
                  className="h-[70px] flex items-center"
                />
              </div>
            </div>
            <ButtonAtom
              text="Contact Us"
              size="base"
              theme="blue"
              icon
              onClick={() => navigate.push("/contact-us")}
            />
          </div>
        </div>
      </div>
      {/* <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition z-[9999] duration-500 fixed inset-0 h-screen w-screen bg-black text-white`}
      ></div> */}
    </nav>
  );
}
