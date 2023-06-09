import React, { useState } from "react";
import Image from "next/image";
import { TfiHome, TfiIdBadge, TfiBookmarkAlt, TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "..";

const info = {
    name: "dao xuan quy",
    avatar: "/avatar.webp",
};

const menuItems = [
    {
        name: "Home",
        href: "hero",
        icon: TfiHome,
    },
    {
        name: "About",
        href: "about",
        icon: TfiIdBadge,
    },
    {
        name: "My works",
        href: "works",
        icon: TfiBookmarkAlt,
    },
    {
        name: "Contact",
        href: "contact",
        icon: TfiEmail,
    },
];

const socialItems = [
    {
        name: "Facebook",
        icon: FaFacebook,
        href: "https://www.facebook.com/x.quy.203",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://www.instagram.com/x.quy.203",
    },
    {
        name: "Linkedin",
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/xquy203/",
    },
    {
        name: "Github",
        icon: FaGithub,
        href: "https://github.com/LiusDev",
    },
];

const SideBar = ({ className }: { className: string }) => {
    const [activeSection, setActiveSection] = useState("hero");
    const handleSetActive = (href: string) => setActiveSection(href);

    return (
        <aside
            className={`w-64 fixed top-0 left-0 bottom-0 hidden xl:flex flex-col justify-between bg-secondary-dark dark:bg-tertiary-dark overflow-hidden shadow-xl dark:shadow-none transition-all duration-300 ${className}`}
        >
            <div className="relative after:content-[''] after:absolute after:-top-[180px] after:-left-[45px] after:w-[310px] after:h-[310px] after:bg-primary after:rounded-full after:shadow-lg dark:after:shadow-none">
                <div className="relative mt-16 z-10 w-full flex flex-col justify-center items-center">
                    <div className="w-100 h-100 overflow-hidden rounded-full border-secondary-dark border-4">
                        <Image
                            src={info.avatar}
                            alt="Avatar"
                            width={100}
                            height={100}
                        />
                    </div>
                    <h5 className="mt-2 uppercase tracking-[3px] text-sm font-thin text-tertiary dark:text-secondary transition-all duration-300">
                        {info.name}
                    </h5>
                </div>
                <div className="mt-20">
                    <ul className="flex flex-col justify-center">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`w-full ${
                                    index !== 0
                                        ? "border-t border-tertiary-dark/5 dark:border-secondary-dark/5"
                                        : ""
                                }`}
                            >
                                <Button
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onSetActive={() =>
                                        handleSetActive(item.href)
                                    }
                                    buttonType="none"
                                    className={`w-full flex px-8 py-5 cursor-pointer transition-all duration-300 ${
                                        activeSection === item.href
                                            ? "font-semibold text-primary"
                                            : "text-tertiary-dark/60 dark:text-secondary-dark/60 dark:hover:text-secondary-dark hover:text-primary font-normal"
                                    }`}
                                >
                                    <item.icon className="text-[18px]" />{" "}
                                    <span className="ml-3 text-sm uppercase tracking-[3px]">
                                        {item.name}
                                    </span>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mb-4">
                <ul className="flex justify-center items-center w-full">
                    {socialItems.map((item, index) => (
                        <li key={index}>
                            <Button
                                title={item.name}
                                buttonType="icon"
                                newTab
                                href={item.href}
                                className="inline-block px-3"
                            >
                                <item.icon className="text-xl text-tertiary-dark dark:text-secondary-dark group-hover:text-primary dark:group-hover:text-text-secondary-dark transition-all duration-300" />
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default SideBar;
