import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

interface ButtonProps extends ComponentPropsWithoutRef<any> {
    newTab?: boolean;
    buttonType?: string;
    className?: string;
}

const Button = ({
    newTab,
    buttonType,
    className,
    children,
    ...props
}: ButtonProps) => {
    let BtnType: any = "button";
    const addProps = {
        ...props,
    };

    if (addProps["href"]) {
        BtnType = Link;
        addProps["target"] = newTab ? "_blank" : "_self";
        addProps["rel"] = newTab ? "noopener noreferrer" : "";
    } else {
        addProps["href"] = "/";
    }

    if (addProps["to"]) {
        BtnType = ScrollLink;
    }

    switch (buttonType) {
        case "normal":
            addProps[
                "className"
            ] = `px-6 py-3 bg-primary tracking-[2px] text-sm text-secondary-dark shadow-button dark:shadow-button-dark cursor-pointer hover:bg-tertiary-dark dark:hover:text-primary dark:hover:bg-secondary-dark hover:shadow-button-hover dark:hover:shadow-button-hover capitalize transition-all duration-300 ${className}`;
            break;
        case "text":
            addProps[
                "className"
            ] = `text-tertiary dark:text-secondary hover:text-primary dark:hover:text-text-secondary-dark transition-all duration-300 ${className}`;
            break;
        case "icon":
            addProps[
                "className"
            ] = `group transition-all duration-300 ${className}`;
            break;
        case "none":
            addProps["className"] = `${className}`;
            break;
        default:
            addProps[
                "className"
            ] = `px-6 py-3 bg-primary tracking-[2px] text-sm text-secondary-dark shadow-button dark:shadow-button-dark cursor-pointer hover:bg-tertiary-dark dark:hover:text-primary dark:hover:bg-secondary-dark hover:shadow-button-hover dark:hover:shadow-button-hover capitalize transition-all duration-300 ${className}`;
            break;
    }
    return <BtnType {...addProps}>{children}</BtnType>;
};

export default Button;
