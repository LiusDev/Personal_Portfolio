import React from "react";
import type { ComponentPropsWithoutRef } from "react";

type aboutInfo = {
    title: string;
    time: string;
    position: string;
    details: string[];
};

interface GroupProps extends ComponentPropsWithoutRef<"div"> {
    title: string;
    info: aboutInfo[];
    className?: string;
}

const Timeline = ({ title, info, className, ...props }: GroupProps) => {
    return (
        <div className={`w-full mb-16 ${className}`} {...props}>
            <h3 className="text-2xl font-bold mb-4 dark:text-secondary-dark transition-all duration-300">
                {title}
            </h3>
            <ul>
                {info.map((item, index) => (
                    <li
                        key={index}
                        className={`${
                            index !== info.length - 1 ? "pb-10" : "pb-1"
                        } relative border-l-2 pl-4 border-primary before:absolute before:content-[''] before:-left-[9px] before:top-0 before:w-4 before:h-4 before:bg-secondary dark:before:bg-tertiary before:border-2 before:border-primary before:rounded-full before:transition-all before:duration-300 transition-all duration-300`}
                    >
                        <h4 className="dark:text-secondary-dark text-xl font-semibold mb-3 leading-6 transition-all duration-300">
                            {item.title}
                        </h4>
                        <p className="text-sm mb-3 bg-primary text-secondary-dark inline-block px-2 py-[2px] rounded-md">
                            {item.time}
                        </p>
                        <p className="mb-2 italic dark:text-secondary-dark transition-all duration-300">
                            {item.position}
                        </p>
                        <ul>
                            {item.details.map((detail, index) => (
                                <li
                                    key={index}
                                    className="relative dark:text-secondary-dark mb-2 pl-4 before:absolute before:content-[''] before:w-2 before:h-2 before:rounded-full before:bg-primary before:top-2 before:left-0 transition-all duration-300"
                                >
                                    {detail}
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Timeline;
