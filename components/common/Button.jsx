import React from 'react'
import Link from 'next/link';

const Button = ({ onclick, href = "/", newTab, buttonType, className, children }) => {
    let BtnType = Link;
    const props = {
        href: href,
        target: newTab ? "_blank" : "_self",
        rel: newTab ? "noopener noreferrer" : "",
    };
    if (onclick) {
        BtnType = "button";
        props.onClick = onclick;
    }
    switch (buttonType) {
        case "normal":
            props.className = `px-6 py-3 bg-primary tracking-[2px] text-sm text-secondary-dark shadow-button dark:shadow-button-dark cursor-pointer transition-all duration-300 hover:bg-tertiary-dark dark:hover:text-primary dark:hover:bg-secondary-dark hover:shadow-button-hover ${className}`;
            break;
        case "text":
            props.className = `text-tertiary dark:text-secondary hover:text-primary dark:hover:text-text-secondary-dark transition-all duration-300 ${className}`;
            break;
        case "icon":
            props.className = `group transition-all duration-300 ${className}`;
            break;
        default:
            props.className = `px-6 py-3 bg-primary tracking-[2px] text-sm text-secondary-dark shadow-button dark:shadow-button-dark cursor-pointer transition-all duration-300 hover:bg-tertiary-dark dark:hover:text-primary dark:hover:bg-secondary-dark hover:shadow-button-hover dark:hover:shadow-button-hover ${className}`;
            break;
    }
    return (
        <BtnType
            { ...props }
        >
            { children }
        </BtnType>
    )
}

export default Button