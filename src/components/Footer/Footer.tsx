import { Images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  const router = useRouter();
  return (
    <div className=" w-full flex flex-col pt-10 pb-5 gap-5 items-center justify-center relative bg-tcolor1">
      <div className="w-full h-fit px-10 sm:px-20 gap-y-10 gap-x-20 flex items-center justify-between text-white">
        <div className="bg-[#fff] flex flex-col items-start justify-center gap-3 md:gap-8">
          <Image
            src={Images.logo}
            alt="langCub-logo"
            width={1000}
            height={1000}
            className="w-20"
            onClick={() => router.push("/")}
          />
        </div>

        <ul className="text-[#fff] flex gap-4 font-esemibold text-[16px] ">
          <Link className="hover:text-white/80" href="/">
            <li>Home</li>
          </Link>
          <Link className="hover:text-white/80" href="/about">
            <li>About us</li>
          </Link>
          <Link className="hover:text-white/80" href="/contact-us">
            <li>Contact us</li>
          </Link>
        </ul>
      </div>

      <div className=" border-b h-1 border-solid border-[#AEAEAE] w-full " />

      <div className="flex flex-wrap gap-10">
        <p className="text-[13px] font-eregular text-[#f1f1f1]">
          &copy;2025 Closers Circle All rights reserved.
        </p>
        <div className="flex gap-2">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/company/the-closers-circle01/"
          >
            <IoLogoLinkedin className="text-white" />
          </a>
          <a href="https://www.instagram.com/the.closerscircle?igsh=Y3U1YjU5Y2tzeHZn">
            <FaSquareInstagram className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
