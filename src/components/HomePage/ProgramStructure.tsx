import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const ProgramStructure = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-16 py-16 overflow-hidden">
      <Fade
        damping={0.5}
        triggerOnce
        fraction={0.1}
        duration={1000}
        delay={200}
        direction="up"
        className=""
      >
        <div className="w-fit bg-[#0071bc3b] px-10 py-2 rounded-[30px]">
          <h2 className="text-[18px] font-[600] text-tcolor1">
            Program Structure
          </h2>
        </div>
      </Fade>

      <div className="flex items-center justify-center gap-10 flex-wrap ">
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={100}
          direction="up"
          className="w-[20em] h-[22em]"
        >
          <div className="size-full flex flex-col gap-3 overflow-hidden rounded-t-sm shadow-xl">
            <Image
              src="/p1.jpg"
              alt="Program Structure"
              width={1000}
              height={1000}
              className="w-full h-[11em] object-cover"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-[18px] text-tcolor1 font-[600]">
                Sales Training
              </h2>
              <p className="text-[15px] text-[#222121] font-[400]">
                Hands-on workshops covering the fundamentals of sales,
                negotiation, and closing techniques.
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={200}
          direction="up"
          className="w-[20em] h-[22em]"
        >
          <div className="size-full flex flex-col gap-3 overflow-hidden rounded-t-sm shadow-xl">
            <Image
              src="/p2.jpg"
              alt="Program Structure"
              width={1000}
              height={1000}
              className="w-full h-[11em] object-cover"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-[18px] text-tcolor1 font-[600]">
                Real Sales Challenge
              </h2>
              <p className="text-[15px] text-[#222121] font-[400]">
                Apply your new skills in live sales projects, working with
                partner companies or launching your own freelance services.
              </p>
            </div>
          </div>
        </Fade>
        <Fade
          damping={0.5}
          triggerOnce
          fraction={0.1}
          duration={1000}
          delay={300}
          direction="up"
          className="w-[20em] h-[22em]"
        >
          <div className="size-full flex flex-col gap-3 overflow-hidden rounded-t-sm shadow-xl">
            <Image
              src="/p3.jpg"
              alt="Program Structure"
              width={1000}
              height={1000}
              className="w-full h-[11em] object-cover"
            />
            <div className="flex flex-col gap-3 p-4">
              <h2 className="text-[18px] text-tcolor1 font-[600]">
                The Closers Honours Day
              </h2>
              <p className="text-[15px] text-[#222121] font-[400]">
                A final event where you&apos;ll celebrate your growth, receive
                your certification, and network with industry leaders for job
                opportunities.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ProgramStructure;
