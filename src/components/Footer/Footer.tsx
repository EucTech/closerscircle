import { Images } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  const router = useRouter();
  return (
    <div className=" w-full flex flex-col pt-20 pb-10 gap-14 items-center justify-center relative bg-tcolor1">
      <div className="w-full h-fit px-10 sm:px-20 gap-y-10 gap-x-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start lg:justify-items-center text-white">
        <div className="flex flex-col items-start justify-center gap-3 md:gap-8">
          <Image src={Images.logo} alt="langCub-logo" width={1000} height={1000} className="w-20" onClick={()=> router.push("/")}/>
          <ul className="text-[#AEAEAE] font-esemibold text-[16px]">
            <Link className="hover:text-white/80" href="/kinyarwanda">
              <li>Learn Kinyarwanda</li>
            </Link>
            <Link className="hover:text-white/80" href="/Swahili">
              <li>Learn swahili</li>
            </Link>
            <Link className="hover:text-white/80" href="/french">
              <li>Learn French</li>
            </Link>
            <Link className="hover:text-white/80" href="/english">
              <li>Learn English</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-3 md:gap-5">
          <h1 className="font-ebold text-[18px]">Company</h1>

          <ul className="text-[#AEAEAE] font-esemibold text-[16px] ">
            <Link className="hover:text-white/80" href="/about">
              <li>About Us</li>
            </Link>
            <Link className="hover:text-white/80" href="/contact-us">
              <li>Contact us</li>
            </Link>
            <Link className="hover:text-white/80" href="/blog">
              <li>Blog</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-3 md:gap-5">
          <h1 className="font-ebold text-[18px]">Legal</h1>

          <ul className="text-[#AEAEAE] font-esemibold text-[16px]">
            <Link className="hover:text-white/80" href="/kinyarwanda">
              <li>Terms</li>
            </Link>
            <Link className="hover:text-white/80" href="/Swahili">
              <li>Policy</li>
            </Link>
            <Link className="hover:text-white/80" href="/french">
              <li>Imprint</li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-3 md:gap-5">
          <h1 className="font-ebold">Get our app</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4 text-white text-[24px] mt-5">
              <Link href="#" ><FaSquareFacebook className=" cursor-pointer hover:text-white/80" /></Link>
              <Link href="#" ><FaSquareXTwitter className=" cursor-pointer hover:text-white/80" /></Link>
              <Link href="#" ><IoLogoLinkedin className=" cursor-pointer hover:text-white/80" /></Link>
              <Link href="#" ><FaSquareInstagram className=" cursor-pointer hover:text-white/80" /></Link>
            </div>
          </div>
        </div>
      </div>

      <div className=" border-b h-1 border-solid border-[#AEAEAE] w-full " />

      <p className="text-[15px] font-eregular text-[#f1f1f1]">
        &copy;2025 Closers Circle All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
