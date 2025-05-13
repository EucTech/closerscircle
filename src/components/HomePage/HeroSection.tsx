import React from "react";
import { Fade } from "react-awesome-reveal";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[30em] relative flex flex-col text-center items-center justify-center gap-3 pt-10 py-10 px-5 md:px-10 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-bg1.jpeg')] bg-cover bg-center bg-fixed z-0"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tcolor1/95 to-tcolor1/95"></div>
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={100}
        direction="up"
        className=""
      >
        <h1 className="text-[#f7f7f7] text-[35px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-[700] leading-[1.2] z-30">
          Master the Close. <br />
          <span className="bg-gradient-to-r from-[#FBB034] to-[#fbaf34cc] bg-clip-text text-transparent">
            {" "}
            Own the Deal.
          </span>{" "}
        </h1>
      </Fade>
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className=""
      >
        <p className="text-white text-[16px] z-30">
          Empowering the Next Generation of Sales Professionals
        </p>
      </Fade>

      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={300}
        direction="up"
        className=" mt-10"
      >
        <a
          className=" bg-[#ffffffe8] hover:bg-white/80 text-[15px] z-30 font-[600] text-tcolor1 cursor-pointer rounded-[4px] py-2 "
          href="https://wa.me/237656106267"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" w-38">Apply Now</button>
        </a>
      </Fade>
    </div>
  );
};

export default HeroSection;
