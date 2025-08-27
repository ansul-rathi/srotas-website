/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import TopSection from "../top-section";

export default function HealthInAction() {

  return (
    <div className="w-full bg-[#FAFAFA] rounded-lg shadow-sm">
      {/* Left Section */}
      <div className="flex flex-col text-center border-l-[1px] border-[#9F9C9C]">
        {/* <TopSection /> */}
         <TopSection
      badgeIcon="/images/trial/stars.svg"
      badgeText="Product Demo"
      title="See Srotas Health in Action"
      description="Watch how our AI platform automates the entire recruitment journey - from analyzing real-world data to enrolling qualified patients."
      imageSrc="/images/analytics-dashboard.png"
      borderColor="#5C3CE5"
      // className="my-8"
      // titleClassName="text-3xl md:text-[40px]"
      // descriptionWidth="w-2/3"
      // imageHeight="h-[500px]"
    />
        
        <img
        src="/images/trial/image1.png"
          className="object-cover w-full h-[400px]"
        />
      </div>
    </div>
  );
}
