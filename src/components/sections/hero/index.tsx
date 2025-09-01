/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import { cn } from "@components/lib/utils";
import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main
      className="relative  bg-[#482EB9] flex items-center w-full overflow-hidden px-6 border-white border-l-[1px] border-b-[1px] py-[200px]"
      style={{
        // display: 'flex', flexDirection: 'column',
        backgroundImage: 'url("/images/trial/dot-pattern.svg")',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative z-10  flex flex-col md:flex-row items-center justify-between  w-full ml-10">
        {/* Left Section */}
        <div className="text-center md:text-left w-7/12">
          {/* <Chip
            color="primary"
            classNames={{
              base: "bg-[#785AFA] text-white font-medium px-4 py-2 font-inter",
            }}
          >
            <img scr="/images/trial/stars.svg"  className="w-10 h-10" /> Generative Clinical Intelligence for Trial Teams
          </Chip> */}

          <div className="w-full flex ">
            <div
              className={cn(
                "flex bg-[#785AFA] text-white font-source font-normal text-[16px] px-3 py-2 rounded-full border-[1px] border-white/10 pr-7"
              )}
            >
              <img src="/images/trial/stars_white.svg" className="h-5 w-5 mr-2" />
              Generative Clinical Intelligence for Trial Teams
            </div>
          </div>

          <h1 className="mt-6 font-dm font-bold text-[42px] leading-tight">
            Gen AI That Turns Patient Data Into{" "}
            Trial-Ready Insights in <span className="text-[#E2FFBE]">0.2 Seconds</span>
            
          </h1>

          <p className="mt-6 text-[18px] text-white font-normal font-source">
            We automate site-level data analysis to accelerate patient
            recruitment, reduce dropouts, and help clinical trials run faster.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-[#E2FFBE] text-[#5630B7] font-bold rounded-full  font-dm text-base py-[12px] px-6"
              endContent={<ArrowRight size={18} />}
            >
              Request a Demo
            </Button>
            <Button
              size="lg"
              variant="bordered"
              className="border border-white text-white font-bold rounded-full px-6 font-dm text-[16px] py-[7px]"
            >
              Find a Trial
            </Button>
          </div>
        </div>

        {/* Right Section (animated placeholder box) */}
        <div className="flex justify-center w-5/12" 
      //   style={{
      //   // display: 'flex', flexDirection: 'column',
      //   backgroundImage: 'url("/images/trial/circle-rings.svg")',
      //   // backgroundSize: 'cover',
      //   // backgroundPosition: 'center',
      //   // backgroundRepeat: 'no-repeat'
      // }}
      >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative  bg-white rounded-xl shadow-2xl w-[390px] h-[370px]"
            style={{
              backgroundImage: "url('/images/right-bg.svg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Floating bars */}
            <motion.div
              animate={{ x: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              className="absolute top-12 -left-20 w-32 h-12 bg-gray-200 rounded-lg"
            />
            <motion.div
              animate={{ x: [0, -20, 20, 0] }}
              transition={{ repeat: Infinity, duration: 6, delay: 1.5 }}
              className="absolute bottom-10 -right-24 w-36 h-12 bg-gray-200 rounded-lg"
            />
          </motion.div>
        </div>
      </div>
      <img src="/images/trial/circle-rings.svg"  className="absolute right-0 top-5"/>
    </main>
  );
}
