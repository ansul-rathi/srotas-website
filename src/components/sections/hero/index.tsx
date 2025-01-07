"use client";

import { title } from "@components/components/primitives";
import { Button } from "@nextui-org/button";
import CompanySlider from "../companies";

export default function Home() {
  return (
    <section
      className="flex flex-1 flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-28 sm:pt-48 min-h-[calc(100vh-4rem)]"
    // style={{
    //   backgroundImage: 'url("/images/bg.webp")',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    //   backgroundRepeat: 'no-repeat'
    // }}
    >
      <div className="w-full max-w-[90%] md:max-w-2xl lg:max-w-4xl xl:max-w-5xl text-center px-4">
        {/* Title Section */}
        <div className="space-y-2 sm:space-y-4">
          <h1 className={`${title({ color: "blue", size: "lg" })} 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            bg-clip-text text-transparent bg-gradient-to-r 
            from-purple-600 to-blue-600 leading-tight`}
          >
            Generative AI{" "}
          </h1>

          <h1 className={`${title({ size: "lg" })} 
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            leading-tight sm:leading-tight md:leading-tight lg:leading-tight
            text-white`}
          >
            for faster Clinical Trials and improved Patient Care in Oncology
          </h1>
        </div>

        {/* Description Section */}
        <div className="flex justify-center items-center mt-4 sm:mt-6 md:mt-8">
          <p className="text-sm sm:text-base md:text-lg 
            text-white/90 w-full sm:w-4/5 md:w-3/4
            leading-relaxed">
            Healthcare and clinical trials sectors must evolve to leverage recent advances in AI. Srotas Health provides oncology researchers and clinicians with tailored AI technology to ensure they maximize the potential of clinical trials and achieve the highest standards of patient care.
          </p>
        </div>

        {/* Button Section */}
        <Button
          as="a"
          href="https://stupendous-quokka-0a467e.netlify.app"
          target="_blank"
          className="mt-6 sm:mt-8 md:mt-10 
            bg-indigo-600 hover:bg-indigo-700 
            text-white text-sm sm:text-base
            px-6 py-2 sm:px-8 sm:py-6
            transition-all duration-300 ease-in-out"
          endContent={
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
        >
          Try our Demo
        </Button>
      </div>

      {/* Company Slider Section */}
      <div className="w-full mt-8 sm:mt-12 md:mt-16 flex flex-col items-center gap-8">
        <div className="relative">
          <span className="text-4xl uppercase tracking-wider text-gray-300 font-medium">
            Trusted by
          </span>
          <div className="absolute w-10 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 -bottom-2 left-1/2 transform -translate-x-1/2 rounded-full"></div>
        </div>

        <div className="w-full">
          <CompanySlider />
        </div>
      </div>
    </section>
  );
}