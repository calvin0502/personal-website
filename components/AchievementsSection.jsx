import React from "react";

const achievementsList = [
    {
        metric: "Projects",
        value: "1",
    },
    {
        metric: "Awards",
        value: "0",
    },
    {
        metric: "Years",
        value: "2",
    }
];

const AchievementsSection = () => {
    return (
        <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16">
            <div className="border border-gray-800 rounded-md py-8 px-8 flex flex-row items-center justify-between gap-8">
                {achievementsList.map((achievement, index) => (
                    <div className="flex flex-col items-center justify-center" key={index}>
                        <h2 className="text-white text-4xl font-bold">{achievement.value}</h2>
                        <p className="text-gray-400 text-base">{achievement.metric}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AchievementsSection;
