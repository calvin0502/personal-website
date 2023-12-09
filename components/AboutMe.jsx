import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

//1d     
const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
          <ul className="list-disc pl-2">
                <li>Python</li>
                <li>CTF</li>
                <li>Next.js</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>HTML</li>
                <li>C Programming</li>
                <li>Tailwind CSS</li>
                
          </ul>
        ),
    },
    {
        title: "Experiences",
        id: "experiences",
        content: (
          <ul className="list-disc pl-2">
            <li>Currently No</li>
            
          </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
          <ul className="list-disc pl-2">
                <li>Asia Pacific University</li>
                <li>Chong Hwa Independent High School</li>
                <li>SJK(C) Desa Jaya 2</li>
          </ul>
        ),
    }
];
//1
const AboutMe = () => {
    //1b
    const[tab, setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    //1a
    return(
        <section className="text-white grid" id="aboutMe">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-32 py-16 xl-gap-16 items-center">
                <div>
                    <img src="/AboutMe.jpg" alt="About Me" width={450} height={450} style={{ borderRadius: "25px" }}/>
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                    <p className="text-base text-justify lg:text-lg">"Hey there! I'm Lai Calvin, a 20-year-old Cyber Security student hailing from Kepong. Currently pursuing my degree at APU, I'm diving headfirst into the world of cybersecurity, fascinated by the ever-evolving digital landscape.
                                                                    Beyond the digital realm, I find joy and balance in two vastly different yet equally thrilling worlds - basketball courts and virtual realms. Whether I'm on the court, shooting hoops, or immersed in the latest video game adventures, these passions fuel my downtime and keep me engaged.
                                                                    Studying the intricacies of cybersecurity isn't just a career path; it's a passion sparked by a curiosity for safeguarding the digital world. It's about staying steps ahead in this ever-shifting technological landscape.
                                                                    When I'm not in the midst of codes and firewalls, you'll likely find me dribbling on the basketball court or navigating through virtual quests with friends. These hobbies aren't just pastimes; they're sources of exhilaration and camaraderie.
                                                                    Join me as I explore the intersections of cyber tech and the joy of play, aiming to make a mark in the digital world while finding balance through the joys of sports and gaming."</p>
                    <div className="flex flex-row mt-8">
{/* 1e */}
                        <TabButton 
                        selectTab={() => handleTabChange("skills")}
                        active= {tab === "skills"}
                        >
                            
                            Skills
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("experiences")}
                        active= {tab === "experiences"}
                        >
                            {" "}
                            Experiences{" "}
                        </TabButton>

                        <TabButton 
                        selectTab={() => handleTabChange("education")}
                        active= {tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>

            </div>
        </section>

    );
};
export default AboutMe;