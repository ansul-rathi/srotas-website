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

export default function TopSectionWithButton({
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
    <div className={cn("w-full rounded-lg shadow-sm", containerClassName, className)} style={{
        backgroundImage: 'url("/images/trial/dot-pattern.svg")',
      }}>
      <div className={cn("flex flex-col text-left border-l-[1px] border-[#9F9C9C] opacity-90 bg-[#FAFAFA]", innerContainerClassName)}>
        <div 
          className={cn("border-l-[10px] py-14", contentPadding)}
          style={{ borderLeftColor: borderColor }}
        >
          {/* Badge */}
          {badgeText && (
            <div className=" flex justify-start ml-10">
              <div className={cn(
                "flex bg-white text-[#6d6c6c] font-medium px-2 pr-10 py-2 border-[1px] border-[#4B5162] rounded-full w-fit gap-2 font-source opacity-80",
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
            <div className="w-full flex text-left justify-start">
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