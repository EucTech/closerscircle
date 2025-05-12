import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full min-h-[30em] relative flex flex-col text-center items-center justify-center gap-3 pt-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center z-0"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tcolor1/95 to-tcolor1/95"></div>

      <h1 className="text-[#fff] text-[80px] font-[700] leading-[1.2] z-40">
        Master the Close. <br />
        <span className="bg-gradient-to-r from-[#FBB034] to-[#fbaf34cc] bg-clip-text text-transparent">
          {" "}
          Own the Deal.
        </span>{" "}
      </h1>
      <p className="text-white text-[16px] z-40">
        Empowering the Next Generation of Sales Professionals
      </p>

      <button className="bg-tcolor1 text-[15px] hover:text-white font-[500] text-white cursor-pointer rounded-[4px] py-2 w-32">
        Apply Now
      </button>
    </div>
  );
};

export default HeroSection;
