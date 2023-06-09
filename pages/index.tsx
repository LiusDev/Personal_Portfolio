import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import {
    ThemeSwitcher,
    SideBar,
    Hero,
    About,
    Works,
    Contact,
    MetaMessenger,
} from "../components";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 600,
            easing: "ease-in-sine",
            delay: 100,
        });
    }, []);
    return (
        <>
            <Head>
                <title>Đào Xuân Quý</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.webp" />
                <meta
                    name="google-site-verification"
                    content="mB8bX8ZMNfErxBvKfSWw9Nellf0U0lWrH8TC7JPbw3U"
                />
                <meta
                    name="description"
                    content="I am a FrontEnd developer with more than 1 year of experience."
                ></meta>
            </Head>
            <ThemeSwitcher />
            <SideBar className="" />
            <main className="bg-secondary dark:bg-tertiary min-h-screen xl:ml-64 overflow-hidden transition-all duration-300">
                <Hero id="hero" className="min-h-screen" />
                <About id="about" className="min-h-screen" />
                {/* <Works id="works" className="min-h-screen mb-32" /> */}
                <Contact id="contact" className="min-h-screen" />
            </main>
            <MetaMessenger />
        </>
    );
}
