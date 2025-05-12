import { Images } from "@/constants";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";

const Navbar = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [homePath, setHomePath] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/") {
      setHomePath(true);
    } else {
      setHomePath(false);
    }
  }, [pathname]);

  const openNavBar = () => {
    setSmallScreen(true);
  };

  const closeNavBar = () => {
    setSmallScreen(false);
  };

  useEffect(() => {
    if (smallScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [smallScreen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const openNavTransition = smallScreen
    ? "translate-y-[0] transition-all duration-700 ease-in-out transform "
    : "-translate-y-[120%] transition-all duration-700 ease-in-out transform ";

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth > 768) {
        setScreenWidth(false);
      } else {
        setScreenWidth(true);
      }
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <nav
      className={cn(
        " fixed w-full h-16 flex items-center justify-between px-[20px] sm:px-7 md:px-16 lg:20 text-[#222222] z-50 border-b border-solid border-[#f0f0f0] bg-[#fff]/40 ",
        isScrolled ? "bg-[#fff]/80 backdrop-blur-md" : "bg-[#fff]",
        homePath ? "bg-[#fff]/80 " : " bg-[#fff] backdrop-blur-3xl ",
        isScrolled && !homePath ? "bg-[#fff]/80 " : " bg-[#fff]/80 "
      )}
    >
      <div className="w-full h-full flex items-center justify-between ">
        <Image
          src={Images.logo}
          alt="langCub-logo"
          width={1000}
          height={1000}
          className="w-20 cursor-pointer"
          onClick={() => router.push("/")}
        />

        <div className="md:flex items-center gap-10 hidden">
            <ul className="flex items-center gap-3">
              <Link href="/">
                <li className="text-[15px] font-[500] hover:text-tcolor1">Home</li>
              </Link>
              <Link href="/about-us">
                <li className="text-[15px] font-[500] hover:text-tcolor1">About us</li>
              </Link>
              <Link href="/contact-us">
                <li className="text-[15px] font-[500] hover:text-tcolor1">Contact us</li>
              </Link>
            </ul>
          <button className="bg-tcolor1 text-[15px] hover:text-white font-[500] text-white cursor-pointer rounded-[4px] py-2 w-32">
            Apply Now
          </button>
        </div>

        <div className="w-8 h-8 flex items-center gap-3 md:hidden border-2 border-solid border-white/30">
          <GiHamburgerMenu
            onClick={openNavBar}
            className={`w-full h-full ${
              smallScreen === true ? "hidden" : "block"
            } `}
          />
          <IoCloseSharp
            onClick={closeNavBar}
            className={`w-full h-full  ${
              smallScreen === false ? "hidden" : "block"
            } `}
          />
        </div>
      </div>

      <div
        className={` ${openNavTransition} w-full flex mx-auto  absolute md:hidden transform top-full h-svh right-0 left-0 bg-white/95 backdrop-blur-3xl`}
      >
        {smallScreen && (
          <div
            className={` w-fit h-fit  py-20 flex flex-col items-start mx-auto gap-5  `}
          >
            <div className="flex flex-col gap-8 md:hidden ">
                <ul className="flex flex-col items-center gap-3">
              <Link href="/">
                <li className="text-[15px] font-[500] hover:text-tcolor1">Home</li>
              </Link>
              <Link href="/about-us">
                <li className="text-[15px] font-[500] hover:text-tcolor1">About us</li>
              </Link>
              <Link href="/contact-us">
                <li className="text-[15px] font-[500] hover:text-tcolor1">Contact us</li>
              </Link>
            </ul>
          <button className="bg-tcolor1 text-[15px]  font-[500] text-white cursor-pointer rounded-[4px] py-2 w-32">
            Apply Now
          </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
