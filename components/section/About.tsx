import React from "react";
import Image from "next/image";
import { Title, Button, Timeline } from "..";

const education = [
    {
        title: "FPT University",
        time: "2021 - Present",
        position: "",
        details: ["Major: Software Engineering"],
    },
];

const activities = [
    {
        title: "JS Club - Japanese Software Engineers",
        time: "2022 - Present",
        position: "Vice President | Member Of Expertise Department",
        details: [
            "Support President in the club management and connecting with club members",
            "Delegate tasks to club officer team, ensuring they understand their responsibilities and motivating them to succeed",
        ],
    },
];

const works = [
    {
        title: "FPT software",
        time: "2021 - Present",
        position: "Frontend Developer",
        details: [
            "Developing and maintaining the company's website",
            "Developing and maintaining the company's internal system",
        ],
    },
    {
        title: "Coccoc",
        time: "2021 - Present",
        position: "Frontend Developer",
        details: [
            "Developing and maintaining the company's website",
            "Developing and maintaining the company's internal system",
        ],
    },
];

const About = ({ id, className }) => {
    return (
        <section
            id={id}
            className={`w-full md:mt-0 px-6 md:px-8 flex flex-col items-center justify-start ${className}`}
        >
            <div className="flex flex-col md:flex-row items-center mb-16 justify-center max-w-screen-lg">
                <div
                    data-aos="fade-right"
                    className="w-72 md:w-1/3 mb-8 md:mb-0"
                >
                    <Image
                        src="/about.webp"
                        alt="About Image"
                        height={560}
                        width={560}
                        className="rounded-2xl"
                    />
                </div>
                <div className="md:ml-16 md:w-2/3" data-aos="fade-left">
                    <Title>about me</Title>
                    <h3 className="text-tertiary-dark dark:text-secondary-dark text-xl md:text-3xl font-medium mb-6 transition-all duration-300">
                        {`I am a FrontEnd developer with more than ${
                            new Date().getFullYear() - 2022
                        } year of experience.`}
                    </h3>
                    <p className="text-tertiary-dark/70 dark:text-secondary-dark/70 leading-7 transition-all duration-300">
                        {`I am a FrontEnd developer with more than ${
                            new Date().getFullYear() - 2022
                        } year of experience, but the products I have made are carefully invested. I am also an active person at work, constantly learning new skills.`}
                    </p>
                    <div className="mt-10 flex justify-center md:justify-start">
                        <Button className="mr-5">Contact Me</Button>
                        <Button
                            href="https://drive.google.com/file/d/1bBnNy7w2ODbYM0ufuTT66MwikX6RFh0b/view"
                            newTab
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full max-w-screen-lg">
                <div className="w-full md:w-1/2 mb-12 md:mb-0">
                    <Timeline
                        data-aos="fade-up"
                        title="Education"
                        info={education}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <Timeline
                        data-aos="fade-up"
                        title="Activities"
                        info={activities}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
