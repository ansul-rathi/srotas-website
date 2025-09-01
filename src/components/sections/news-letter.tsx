/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { cn } from "@components/lib/utils";

export default function NewsletterSection() {
  return (
    <div className="bg-[#E2FFBE] py-8 px-6 flex flex-col items-center text-center mx-24 border-[1px] border-dashed border-gray-400">
      {/* Badge */}
      <div className="w-full flex justify-center">
        <div
          className={cn(
            "flex bg-white text-[#6d6c6c] font-medium px-6 py-2 border-[1px] border-[#4B5162] rounded-full w-fit items-center gap-2 font-source opacity-80"
          )}
        >
          <img src="/images/trial/stars.svg" className="h-5 w-5" />
          Newsletter
        </div>
      </div>

      {/* Heading */}
      <h2 className="font-dm font-bold text-[32px] text-[#070707] px-10">
        Subscribe to get the latest insights, AI breakthroughs, and expert tips
        – delivered straight to your inbox.
      </h2>

      {/* Form */}
      <div className="mt-8 flex w-full max-w-lg rounded-full overflow-hidden shadow-sm text-[15px] font-normal font-source border-[1px] border-gray-200">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 outline-none text-gray-700 placeholder-gray-400"
        />
        <button className="font-source font-semibold text-[15px] bg-[#5C3CE5] px-[18px] ">
          Subscribe
        </button>
      </div>
    </div>
  );
}
