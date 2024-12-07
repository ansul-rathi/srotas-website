"use client";
import { useState } from 'react';
import { Tabs, Tab } from "@nextui-org/tabs";
import { Button } from "@nextui-org/button";

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
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl lg:text-4xl font-semibold text-center mb-12 leading-tight text-black">
                    Three Cutting-edge AI Tools Shaping the Future
                    <br />
                    of Clinical Research and Healthcare
                </h2>

                <div className="max-w-3xl mx-auto mb-12">
                    <Tabs
                        aria-label="AI Tools"
                        selectedKey={selected}
                        onSelectionChange={(key) => setSelected(key as string)}
                        variant="light"
                        classNames={{
                            base: "w-full",
                            tabList: "w-full relative p-0 border border-black",
                            tab: "h-12 px-8 bg-white hover:bg-gray-100 text-black",
                        }}
                    >
                        <Tab key="insightMatch" title="InsightMatch" />
                        <Tab key="dataLink" title="DataLink" />
                        <Tab key="outcomePredict" title="OutcomePredict" />
                    </Tabs>
                </div>

                {toolsData.map((tool) => (
                    tool.id === selected && (
                        <div key={tool.id} className="bg-black p-8 lg:p-12">
                            <div className="flex flex-col lg:flex-row gap-12">
                                <div className="w-full lg:w-1/2 h-full">
                                    <div className="bg-white border border-gray-200 w-full h-[500px] flex items-center justify-center">
                                        <p className="text-black">Video or animation</p>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full lg:w-1/2 text-white justify-center align-middle">
                                    <h3 className="text-3xl font-semibold mb-4">{tool.title}</h3>
                                    <p className="text-gray-300 mb-8">{tool.description}</p>

                                    <ul className="space-y-2 mb-8">
                                        {tool.features.map((feature, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <span className="text-gray-400">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className="bg-blue-600 text-white px-8 h-12 w-5/12"
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
        </section>
    );
};

export default AIToolsSection;