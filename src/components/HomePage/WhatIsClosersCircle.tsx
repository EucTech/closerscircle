import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const WhatIsClosersCircle = () => {
  return (
    <section className="bg-[#f5f5f2] flex flex-col lg:flex-row gap-10 lg:gap-20 items-center overflow-hidden justify-center py-20 px-5 md:px-10 lg:px-20">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className="w-[95%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
      >
        <div className="w-full items-center lg:items-start text-center lg:text-start flex flex-col gap-5">
          <h2 className="text-[35px] font-[500]">
            What is Closer&apos;s Circle?
          </h2>
          <p className="text-[15px] font-[400]">
            Closer&apos;s Circle is a trimester-based, student-led fellowship at
            African Leadership University designed to turn aspiring individuals
            into high-performing sales professionals. With hands-on training,
            mentorship, and real-world sales experience, this program empowers
            students to master sales and become confident closers in any
            industry.
          </p>
        </div>
      </Fade>

      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className="w-[400px] lg:w-[35%]"
      >
        <Image
          src="/what1.jpg"
          alt="what-image"
          width={1000}
          height={1000}
          className="w-full rounded-2xl"
        />
      </Fade>
    </section>
  );
};

export default WhatIsClosersCircle;
