import React, { useEffect, useState } from "react";
import { Title, Button } from "..";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "NextJS", "TailwindCSS", "Framer Motion"];

const projects = [
    {
        image: "https://quydxportfolio.netlify.app/assets/img/portfolio/theband.webp",
        name: "The Band Website",
        description:
            "A website for a band. This website is built with NextJS, TailwindCSS, and Framer Motion.",
        categories: ["All", "NextJS", "TailwindCSS", "Framer Motion"],
        createdAt: "31 March 2022",
        role: "Frontend",
        techStack: ["NextJS", "TailwindCSS", "Framer Motion"],
        link: "https://quydxtheband.netlify.app",
        repo: "https://github.com/liusdev/theband",
    },
    {
        image: "https://quydxportfolio.netlify.app/assets/img/portfolio/theband.webp",
        name: "The Band Website",
        description:
            "A website for a band. This website is built with NextJS, TailwindCSS, and Framer Motion.",
        categories: ["All", "Framer Motion"],
        createdAt: "31 March 2022",
        role: "Frontend",
        techStack: ["Framer Motion"],
        link: "https://quydxtheband.netlify.app",
        repo: "https://github.com/liusdev/theband",
    },
    {
        image: "https://quydxportfolio.netlify.app/assets/img/portfolio/theband.webp",
        name: "The Band Website",
        description:
            "A website for a band. This website is built with NextJS, TailwindCSS, and Framer Motion.",
        categories: ["All", "TailwindCSS"],
        createdAt: "31 March 2022",
        role: "Frontend",
        techStack: ["TailwindCSS"],
        link: "https://quydxtheband.netlify.app",
        repo: "https://github.com/liusdev/theband",
    },
    {
        image: "https://quydxportfolio.netlify.app/assets/img/portfolio/theband.webp",
        name: "The Band Website",
        description:
            "A website for a band. This website is built with NextJS, TailwindCSS, and Framer Motion.",
        categories: ["All", "NextJS"],
        createdAt: "31 March 2022",
        role: "Frontend",
        techStack: ["NextJS"],
        link: "https://quydxtheband.netlify.app",
        repo: "https://github.com/liusdev/theband",
    },
];

const Works = ({ id, className }) => {
    const [category, setCategory] = useState(categories[0]);
    const [filterProjects, setFilterProjects] = useState(projects);
    const handleSetCategory = (category) => setCategory(category);

    useEffect(() => {
        setFilterProjects(
            projects.filter((project) => project.categories.includes(category))
        );
    }, [category]);

    return (
        <section id={id} className={`w-full md:mt-0 px-6 md:px-8 ${className}`}>
            <div className="max-w-screen-lg m-auto">
                <Title>Recent Work</Title>
                <ul>
                    {categories.map((categoryItem, index) => (
                        <li key={index} className="inline-block mr-8">
                            <Button
                                className={`text-tertiary-dark/60 dark:text-secondary-dark/60 dark:hover:text-secondary-dark hover:text-primary uppercase relative transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
                                    categoryItem === category
                                        ? "after:w-full"
                                        : "after:w-0"
                                }`}
                                onClick={() => handleSetCategory(categoryItem)}
                                buttonType="text"
                            >
                                {categoryItem}
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="max-w-screen-lg m-auto">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                >
                    {projects.map((project, index) => (
                        <AnimatePresence key={index}>
                            <motion.div
                                layout
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -20, opacity: 0 }}
                                className={`bg-secondary-dark/10 dark:bg-secondary-dark/20 rounded-md p-6 ${
                                    filterProjects.includes(project)
                                        ? ""
                                        : "hidden"
                                }`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full rounded-md mb-4"
                                />
                                <h3 className="text-2xl font-bold mb-4 dark:text-secondary-dark transition-all duration-300">
                                    {project.name}
                                </h3>
                                <p className="mb-4 dark:text-secondary-dark transition-all duration-300">
                                    {project.description}
                                </p>
                                <ul>
                                    {project.techStack.map((tech, index) => (
                                        <li
                                            key={index}
                                            className="inline-block mr-4 mb-4 bg-primary text-secondary-dark px-4 py-2 rounded-md"
                                        >
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex justify-between">
                                    <Button
                                        className="text-tertiary-dark/60 dark:text-secondary-dark/60 dark:hover:text-secondary-dark hover:text-primary uppercase relative transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-full"
                                        buttonType="text"
                                        href={project.link}
                                        target="_blank"
                                    >
                                        View
                                    </Button>
                                    <Button
                                        className="text-tertiary-dark/60 dark:text-secondary-dark/60 dark:hover:text-secondary-dark hover:text-primary uppercase relative transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:h-[2px] after:bg-primary after:transition-all after:duration-300 after:w-full"
                                        buttonType="text"
                                        href={project.repo}
                                        target="_blank"
                                    >
                                        Repo
                                    </Button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Works;
