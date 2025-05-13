import Image from "next/image";
import React from "react";

const Speaker = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-[#0071bc07] gap-10 py-20 px-5">
      <h2 className="text-[25px] md:text-[30px] text-center font-[600] text-tcolor1">
        Speakers
      </h2>

      <div className="flex items-center justify-center gap-10 flex-wrap ">
        <div className="w-fit text-center flex flex-col items-center justify-center gap-4">
          <Image
            src="/s1.jpg"
            alt="Program Structure"
            width={1000}
            height={1000}
            className="size-40 object-cover rounded-full border border-[#fff] "
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-[16px] text-tcolor1 font-[600]">
              Lead Broker Ciskah Realty
            </h2>
            <p className="text-[15px] text-[#222121] font-[400]">
              Jayceekah C. Ogbonna
            </p>
          </div>
        </div>
        <div className="w-fit text-center flex flex-col items-center justify-center gap-4">
          <Image
            src="/s2.png"
            alt="Program Structure"
            width={1000}
            height={1000}
            className="size-40 object-cover rounded-full border border-[#afacac28] "
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-[16px] text-tcolor1 font-[600]">
              MD/CEO Homland Best
            </h2>
            <p className="text-[15px] text-[#222121] font-[400]">David Ike</p>
          </div>
        </div>
        <div className="w-fit text-center flex flex-col items-center justify-center gap-4">
          <Image
            src="/s3.png"
            alt="Program Structure"
            width={1000}
            height={1000}
            className="size-40 object-cover rounded-full border border-[#fff] "
          />
          <div className="w-[60%] flex flex-col items-center justify-center gap-2">
            <h2 className=" text-[16px]  text-tcolor1 font-[600]">
              CEO Majescity Real Estate and Investment Ltd.
            </h2>
            <p className="text-[15px] text-[#222121] font-[400]">
              Okwuchukwu Okonkwo
            </p>
          </div>
        </div>
        <div className="w-fit text-center flex flex-col items-center justify-center gap-4">
          <Image
            src="/s4.jpg"
            alt="Program Structure"
            width={1000}
            height={1000}
            className="size-40 object-cover rounded-full border border-[#fff] "
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-[16px] text-tcolor1 font-[600]">
              CEO Appex Assets Ltd.
            </h2>
            <p className="text-[15px] text-[#222121] font-[400]">
              Ekeh Chukwuagozie Victor
            </p>
          </div>
        </div>
        <div className="w-fit text-center flex flex-col items-center justify-center gap-4">
          <Image
            src="/s5.jpg"
            alt="Program Structure"
            width={1000}
            height={1000}
            className="size-40 object-cover rounded-full border border-[#fff] "
          />
          <div className="w-[60%] flex flex-col items-center justify-center gap-2">
            <h2 className="text-[16px] text-tcolor1 font-[600]">
              SRC President ALU Rwanda Leadership Educator and Consultant
            </h2>
            <p className="text-[15px] text-[#222121] font-[400]">
              Paul Udah
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speaker;
