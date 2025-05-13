import React from "react";

const WhyApply = () => {
  return (
    <div className="w-full h-fit flex flex-col gap-6 items-start justify-center bg-[#0071bc23] py-16 px-5 sm:px-10 md:px-30">
      <h1
        className="text-[30px] md:text-[45px] text-tcolor1 font-extrabold "
      >
        Why Apply Early?
      </h1>
      <p
        className="w-full sm:w-[80%] md:w-[70%] xl:w-[50%] text-[16px] text-black"
      >
        Space is limited, and spots fill up quickly. Early applicants have a
        higher chance of securing a place in the program.
      </p>
      <a href="https://wa.me/237656106267" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center gap-5 cursor-pointer bg-[#191919] text-white hover:bg-[#191919]/80 transition-colors duration-300 px-10 py-4 rounded-md">
          Apply Now
        </button>
      </a>
    </div>
  );
};

export default WhyApply;
