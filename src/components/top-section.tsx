/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { cn } from "@components/lib/utils";

// If you don't have cn utility, you can use: const cn = (...classes) => classes.filter(Boolean).join(' ')

interface SectionProps {
  // Badge props
  badgeIcon?: string;
  badgeText?: string;
  badgeClassName?: string;
  
  // Title and description
  title: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  descriptionWidth?: string; // default: "w-1/2"
  
  // Image
  imageSrc: string;
  imageAlt?: string;
  imageHeight?: string; // default: "h-[400px]"
  imageClassName?: string;
  
  // Container styling
  containerClassName?: string;
  innerContainerClassName?: string;
  contentPadding?: string; // default: "pt-12 pb-12"
  borderColor?: string; // default: "#5C3CE5"
  
  // Additional className for the entire component
  className?: string;
}

export default function TopSection({
  badgeIcon,
  badgeText,
  badgeClassName,
  title,
  titleClassName,
  description,
  descriptionClassName,
  descriptionWidth = "",
  imageSrc,
  imageAlt = "",
  imageHeight = "",
  imageClassName,
  containerClassName,
  innerContainerClassName,
  contentPadding = "",
  borderColor = "",
  className,
}: SectionProps) {
  return (
    <div className={cn("w-full  rounded-lg shadow-sm", containerClassName, className)}  style={{
        backgroundImage: 'url("/images/trial/dot-pattern.svg")',
      }}>
      <div className={cn("flex flex-col text-center border-l-[1px] border-[#9F9C9C] bg-[#FAFAFA] opacity-90", innerContainerClassName)}>
        <div 
          className={cn("border-l-[10px] py-14", contentPadding)}
          style={{ borderLeftColor: borderColor }}
        >
          {/* Badge */}
          {badgeText && (
            <div className="w-full flex justify-center">
              <div className={cn(
                "flex bg-white text-[#6d6c6c] font-medium px-6 py-2 border-[1px] border-[#4B5162] rounded-full w-fit items-center gap-2 font-source opacity-80",
                badgeClassName
              )}>
                {badgeIcon && <img src={badgeIcon} className="h-5 w-5" />}
                {badgeText}
              </div>
            </div>
          )}

          {/* Title */}
          <h2 className={cn(
            "mt-4 text-2xl md:text-[32px] font-bold text-[#272D37] pl-10 font-dm",
            titleClassName
          )}>
            {title}
          </h2>

          {/* Description */}
          {description && (
            <div className="w-full flex text-center justify-center">
              <p className={cn(
                "mt-4 text-[16px] font-normal text-[#5F6D7E] px-10 font-source w-7/12",
                descriptionWidth,
                descriptionClassName
              )}>
                {description}
              </p>
            </div>
          )}
        </div>
        
        {/* Image */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className={cn("object-cover w-full", imageHeight, imageClassName)}
        />
      </div>
    </div>
  );
}

// Example usage with original values:
// export function TopSection() {
//   return (
//     <Section
//       badgeIcon="/images/trial/stars.svg"
//       badgeText="Product Demo"
//       title="See Srotas Health in Action"
//       description="Watch how our AI platform automates the entire recruitment journey - from analyzing real-world data to enrolling qualified patients."
//       imageSrc="/images/trial/img1.png"
//     />
//   );
// }

// // Example with custom styling:
// export function CustomSection() {
//   return (
//     <Section
//       badgeIcon="/images/icons/rocket.svg"
//       badgeText="New Feature"
//       title="Introducing Advanced Analytics"
//       description="Get deep insights into your data with our powerful analytics tools."
//       imageSrc="/images/analytics-dashboard.png"
//       borderColor="#FF6B6B"
//       className="my-8"
//       titleClassName="text-3xl md:text-[40px]"
//       descriptionWidth="w-2/3"
//       imageHeight="h-[500px]"
//     />
//   );
// }