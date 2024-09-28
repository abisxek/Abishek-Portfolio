import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfilePic1.png";
import {motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const roles = ["AI/ML Engineer", "Data Scientist"];
const changeInterval = 1800; // Interval in milliseconds

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(roles[0]); // State to hold the current role
    const [isVisible, setIsVisible] = useState(true); // State to control visibility
    const [initialRenderDone, setInitialRenderDone] = useState(false); // State to track if initial render is done

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setInitialRenderDone(true); // Mark the initial render as done after a delay
        }, 500); // Delay before showing the role text initially

        const intervalId = setInterval(() => {
            setIsVisible(false); // Start by hiding the current role
            setTimeout(() => {
                setCurrentRole((prevRole) => (prevRole === roles[0] ? roles[1] : roles[0])); // Switch role
                setIsVisible(true); // Show the new role
            }, 500); // Match this with the duration of the fade-out animation
        }, changeInterval);

        return () => {
            clearTimeout(timeoutId);
            clearInterval(intervalId); // Clear the interval on component unmount
        };
    }, []);

    // Conditionally set gradient colors based on the role
    const roleGradient =
        currentRole === "AI/ML Engineer"
            ? "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
            : "bg-gradient-to-r from-blue-400 via-green-400 to-teal-500";

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Abishek R
                        </motion.h1>
                        {initialRenderDone && ( // Render only after the initial delay
                            <motion.span
                                variants={container(0)}
                                initial="hidden"
                                animate={{ x: 0, opacity: isVisible ? 1 : 0 }} // Control visibility based on state
                                transition={{ duration: 0.5 }} // Fade duration
                                className={`${roleGradient} bg-clip-text text-3xl tracking-tight text-transparent`}>
                                {currentRole}
                            </motion.span>
                        )}
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking tighter">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic}
                            alt="AbishekR" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
