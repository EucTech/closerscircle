import React from "react";

const AboutHero = () => {
  return (
    <div className=" relative w-full min-h-[20em] flex flex-col gap-5 text-center font-sf items-center justify-center bg-[#052941] text-white py-20 px-5 md:px-10 xl:px-20">
      <h1 className="text-[35px] text-white sm:text-[50px] font-[600]">
        About <span className="text-tcolor2">us</span>
      </h1>
      <p className=" w-full sm:w-[80%] text-[15px] font-[400]">
        Closer&apos;s Circle is a student-led fellowship program at African
        Leadership University, created to equip students with the skills
        necessary to excel in sales. We combine practical sales training,
        real-world experience, mentorship, and community activities to help
        students master the art of closing deals and unlocking career success.
      </p>

      <div className=" absolute w-[24em] h-[20em] bg-tcolor1/40 blur-[90px] rounded-full -left-10 bottom-0 z-10 "></div>
    </div>
  );
};

export default AboutHero;
