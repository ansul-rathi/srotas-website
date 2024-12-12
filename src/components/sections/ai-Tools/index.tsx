"use client";
import { useState } from 'react';
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";
import StatsSection from '../stats-section';

interface ToolData {
    id: string;
    title: string;
    description: string;
    features: string[];
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
        ]
    },
    {
        id: "dataLink",
        title: "DataLink",
        description: "Your DataLink description here",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3",
            "Feature 4"
        ]
    },
    {
        id: "outcomePredict",
        title: "OutcomePredict",
        description: "Your OutcomePredict description here",
        features: [
            "Feature 1",
            "Feature 2",
            "Feature 3",
            "Feature 4"
        ]
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

                    <div className="bg-gray-200 max-w-3xl mx-auto mb-8 md:mb-12 py-1 px-1 border-2 border-white">
                        <Tabs
                            aria-label="AI Tools"
                            selectedKey={selected}
                            onSelectionChange={(key) => setSelected(key as string)}
                            variant="light"
                            classNames={{
                                base: "w-full",
                                tabList: "w-full relative p-0 ",
                                tab: "h-12 px-4 md:px-8 data-[selected=true]:text-white transition-colors py-2",
                                cursor: "bg-white",
                                panel: "pt-4",
                            }}
                        >
                            <Tab
                                key="insightMatch"
                                title={
                                    <div className="flex items-center justify-center w-full relative">
                                    
                                     <span className={`text-sm md:text-base font-medium ${selected === 'insightMatch' ? 'text-black' : 'text-black'}`}>
                                         InsightMatch
                                     </span>
                                    {/* Separator - show only if not last tab and not selected */}
                                    <div className={`absolute right-[-80] top-1/2 -translate-y-1/2 h-5 w-px bg-black
                                        ${selected === 'dataLink' ? 'hidden' : ''}`} />
                                </div>
                                }
                            />
                            
                            <Tab
                                key="dataLink"
                                title={
                                    <span className={`text-sm md:text-base font-medium ${selected === 'dataLink' ? 'text-black' : 'text-black'}`}>
                                        DataLink
                                    </span>
                                }
                            />
                            <Tab
                                key="outcomePredict"
                                title={
                                      <div className="flex items-center justify-center w-full relative">
                                    
                                      
                                    <span className={`text-sm md:text-base font-medium ${selected === 'outcomePredict' ? 'text-black' : 'text-black'}`}>
                                        OutcomePredict
                                    </span>
                                     {/* Separator - show only if not last tab and not selected */}
                                     <div className={`absolute left-[-70] top-1/2 -translate-y-1/2 h-5 w-px bg-black
                                         ${selected === 'dataLink' ? 'hidden' : ''}`} />
                                 </div>
                                }
                            />
                        </Tabs>
                    </div>

                    {toolsData.map((tool) => (
                        tool.id === selected && (
                            <div key={tool.id} className="p-4 md:p-8 lg:p-12" style={{
                                backgroundImage: 'url("/images/bg.png")', // Update with your image path
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                                    <div className="w-full lg:w-1/2">
                                        <div className="bg-white/40 border border-gray-200 w-full aspect-video md:h-[400px] lg:h-[500px] flex items-center justify-center">
                                            <p className="text-white">Video or animation</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col w-full lg:w-1/2 text-white justify-center">
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