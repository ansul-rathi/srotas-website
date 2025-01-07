/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from 'react';
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import StatsSection from '../stats-section';
import Lottie from "lottie-react";
// import insightMatch from '../../../assets/insight-match.json';
import dataLink from '../../../assets/data-link.json';
import outcome from '../../../assets/outcome.json';

interface ToolData {
    id: string;
    title: string;
    description: string;
    features: string[];
    video: any;
    alt: string;
}

const toolsData: ToolData[] = [
    {
        id: "insightMatch",
        title: "InsightMatch",
        description: "Uses AI to automate and optimize clinical trial recruitment and planning for improved efficiency, enhanced study quality, and secured patient privacy.",
        features: [
            "Cohorting",
            "Feasibility Analysis",
            "Simplified Patient Matching",
            "Real-time Notifications"
        ],
        video: "",
        alt: "Insight Match"
    },
    {
        id: "dataLink",
        title: "DataLink",
        description: "AI-driven tool that pools relevant patient data from diverse sources and presents it in a clear format, reducing administrative burdens and improving clinical decision-making.",
        features: [
            "Automated Patient Data Structuring",
            "EHR Search with Automated Citations",
            "Efficient Precharting",
        ],
        video: dataLink,
        alt: "Data Link"
    },
    {
        id: "outcomePredict",
        title: "OutcomePredict",
        description: "Leverages AI and real-time analytics to optimize trial management, improve patient outcomes, and drive clinical trial success.",
        features: [
            "Real-time Analytics Dashboard",
            "Patient Health Prediction",
            "Clinical Trial Forecasting"
        ],
        video: outcome,
        alt: "Outcome Predict"
    }
];

const AIToolsSection = () => {
    const [selected, setSelected] = useState("insightMatch");

    return (
        <section className="bg-gray-100 pb-8 md:pb-12 lg:pb-20">
            <div className='py-8 md:py-12 lg:py-20'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 md:mb-12 leading-tight text-black">
                        <span className="block md:inline">Three Cutting-edge AI Tools</span>
                        <span className="block md:inline md:ml-2">Shaping the Future</span>
                        <span className="block mt-2">of Clinical Research and Healthcare</span>
                    </h2>

                    <div className="bg-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-12 py-1 px-1 border-2 border-white">
                        <Tabs
                            aria-label="AI Tools"
                            selectedKey={selected}
                            onSelectionChange={(key) => setSelected(key as string)}
                            variant="light"
                            classNames={{
                                base: "w-full",
                                tabList: "w-full relative p-0 flex",
                                tab: "flex-1 h-10 sm:h-12 text-[10px] xs:text-xs sm:text-sm md:text-base px-1 xs:px-2 sm:px-4 md:px-8 data-[selected=true]:text-white transition-colors py-1 sm:py-2",
                                cursor: "bg-white",
                                panel: "pt-4",
                            }}
                        >
                            <Tab
                                key="insightMatch"
                                title={
                                    <div className="flex items-center justify-center w-full relative whitespace-nowrap">
                                        <span className={`font-medium ${selected === 'insightMatch' ? 'text-black' : 'text-black'}`}>
                                            InsightMatch
                                        </span>
                                        <div className={`absolute 
                        right-[-30px] xs:right-[-20px] sm:right-[-50px] md:right-[-80px] 
                        top-1/2 -translate-y-1/2 h-3 sm:h-4 md:h-5 w-px bg-black
                        ${selected === 'dataLink' ? 'hidden' : ''}`}
                                        />
                                    </div>
                                }
                            />

                            <Tab
                                key="dataLink"
                                title={
                                    <span className={`font-medium whitespace-nowrap ${selected === 'dataLink' ? 'text-black' : 'text-black'}`}>
                                        DataLink
                                    </span>
                                }
                            />

                            <Tab
                                key="outcomePredict"
                                title={
                                    <div className="flex items-center justify-center w-full relative whitespace-nowrap">
                                        <span className={`font-medium ${selected === 'outcomePredict' ? 'text-black' : 'text-black'}`}>
                                            OutcomePredict
                                        </span>
                                        <div className={`absolute 
                        left-[-25px] xs:left-[-20px] sm:left-[-50px] md:left-[-70px] 
                        top-1/2 -translate-y-1/2 h-3 sm:h-4 md:h-5 w-px bg-black
                        ${selected === 'dataLink' ? 'hidden' : ''}`}
                                        />
                                    </div>
                                }
                            />
                        </Tabs>
                    </div>

                    {toolsData.map((tool) => (
                        tool.id === selected && (
                            <div key={tool.id} className="p-4 md:p-8 lg:p-12" style={{
                                backgroundImage: 'url("/images/bg.webp")', // Update with your image path
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                                    <div className="w-full lg:w-1/2">
                                        <div className=" relative  rounded w-full overflow-hidden  aspect-video md:h-[400px] lg:h-[500px]  flex items-center justify-center">
                                            {/* <p className="text-white">Video or animation</p> */}
                                            {/* <Image
                                                src={tool.video}
                                                alt={tool.alt}
                                                fill
                                                className="object-contain rounded "
                                                priority
                                                unoptimized
                                            /> */}
                                            <Lottie animationData={tool.video} loop={true} autoplay={true} />
                                        </div>

                                    </div>

                                    <div className="flex flex-col w-full lg:w-1/2 text-white mt-8">
                                        <h3 className="text-2xl md:text-3xl font-semibold mb-4">{tool.title}</h3>
                                        <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">{tool.description}</p>

                                        <ul className="space-y-2 mb-6 md:mb-8">
                                            {tool.features.map((feature, index) => (
                                                <li key={index} className="flex items-start space-x-3 text-sm md:text-base">
                                                    <span className="text-gray-400">•</span>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Button
                                            className="bg-[#6936F4] hover:bg-[#622df7] text-white px-6 md:px-8 py-2 h-10 md:h-12 w-full md:w-5/12 transition-colors"
                                            endContent={
                                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            }
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>

            <StatsSection />
        </section>
    );
};

export default AIToolsSection;