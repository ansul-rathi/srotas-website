/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import Image from "next/image";

const struggles = [
  {
    id: 0,
    icon: "/images/trial/clock-white.svg",
    grayIcon: "/images/trial/clock.svg",
    title:
      "Sites generate 1000’s of patient leads, but most don’t meet trial criteria. Teams spend weeks chasing the wrong candidates.",
    desc: "Teams spend weeks chasing the wrong candidates.",
    color: "bg-gray-100 text-gray-500",
    image: "/images/trial/img1.png",
    imageAlt: "struggle-1.png",
  },
  {
    id: 1,
    icon: "/images/trial/group-white.svg",
    grayIcon: "/images/trial/group.svg",
    title:
      "Spend countless hours on telescreening, mapping patients to criteria(avg. 40 min/patient), and manual entry.",
    desc: "(avg. 40 min/patient), and manual entry.",
    color: "bg-[#6C47FF] text-white",
    textColor: "text-[#6C47FF]",
    image: "/images/struggle-2.png",
    imageAlt: "struggle-2.png",
  },
  {
    id: 2,
    icon: "/images/trial/group-white.svg",
    grayIcon: "/images/trial/group.svg",
    title:
      "Sites lose patient's at each stage of evaluation. In one study, 3,100 leads converted to 7 enrolments (0.22%)",
    desc: "3,100 leads converted to 7 enrolments (0.22%).",
    color: "bg-gray-100 text-gray-500",
    image: "/images/struggle-3.png",
    imageAlt: "struggle-3.png",
  },
  {
    id: 3,
    icon: "/images/trial/light-white.svg",
    grayIcon: "/images/trial/light.svg",
    title:
      "For CROs and sponsors, delays mean missed milestones, rising costs, and patients waiting longer for treatment.",
    desc: "Missed milestones, rising costs, and delays.",
    color: "bg-gray-100 text-gray-500",
    image: "/images/struggle-4.png",
    imageAlt: "struggle-4.png",
  },
];

export default function StrugglesLeft() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-[#FAFAFA] rounded-lg shadow-sm">
      {/* Left Section */}

      <div className="space-y-6 border-l-[1px] border-[#9F9C9C]">
        <div className=" border-l-[10px] border-white">
          {/* <div className=" border-t-[1px] border-[#9F9C9C]" /> */}
          <div className="my-28 ">
            {struggles.map((item, index) => (
              <div
                key={item.id}
                onClick={() => setSelected(index)}
               className={`flex py-5 p-3 cursor-pointer transition pl-11  
  ${selected === index ? "text-[#6C47FF] bg-gradient-to-r from-[#F2EDFF] to-white " : ""}`}

              >
                <div
                  className={`flex items-center justify-center rounded-full px-3 ${
                    selected === index
                      ? "bg-[#6C47FF] text-white"
                      : "bg-[#E7E7E7]"
                  }`}
                >
                  {/* {item.icon} */}
                  <img
                    src={selected === index ? item?.icon : item?.grayIcon}
                    width={40}
                    height={40}
                    className="text-black"
                  />
                </div>
                <div>
                  <p
                    className={`text-[16px] font-semibold font-source ml-4 ${
                      selected === index ? item.textColor : "text-gray-700"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Highlight */}
          <div className="bg-[#6C47FF] px-14 py-11">
            <div className="flex text-white font-bold text-2xl md:text-3xl items-center">
              <div className="text-[60px] font-semibold font-dm text-[#E2FFBE]">80%</div>
              <span className="font-normal text-white text-normal text-[20px] pl-10 leading-7 font-source">
                of clinical trials fail to meet enrollment targets on time.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Carousel Image) */}
      <div className="flex items-center justify-center bg-white ">
        <Image
          src={struggles[selected].image}
          alt={struggles[selected].imageAlt}
          width={700}
          height={800}
        />
      </div>
    </div>
  );
}
