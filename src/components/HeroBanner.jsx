import { useRef } from "react";
import { motion } from "framer-motion";

import Wrapper from "./Wrapper";
import man from "../assets/man.png";
import externalLinkIcon from "../assets/external-link-icon.png";
import { scrollTo } from "../helper";
import { useFollowPointer } from "./useFollowPointer";

const HeroBanner = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    // const handleDownload = () => {
    //     const link = document.createElement('a');
    //     link.href = PrabeshGuptaCV;
    //     link.download = 'Prabesh_Gupta_CV.pdf';
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };

    return (
        <div
            id="hero"
            className="w-full h-[100vh] relative bg-[#111111] overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            {/* BACKGROUND ELEMENTS FOR DESKTOP START */}
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            {/* BACKGROUND ELEMENTS FOR DESKTOP END */}

            <Wrapper>
                {/* NAVBAR START */}
                <motion.div
                    className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[100px] h-[42px] bg-gradient-to-l from-cyan-500 to-blue-600 flex justify-center items-center font-bold rounded-[5%] object-contain">
                            <button
                                type='button'
                                onClick={() => window.open('https://www.linkedin.com/in/prabeshgupta')}
                            >
                                Linkedin
                            </button>
                        </div>
                    </div>
                    <ul className="flex 2xl:text-[20px]">
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("work")}
                        >
                            Work
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </motion.div>
                {/* NAVBAR END */}

                {/* BIG HEADING START */}
                <motion.div
                    className="flex justify-center text-center mt-14 mb-10 relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[50px] md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
                        I Am A Creative
                        <br className="invisible md:visible" />
                        Designer
                    </h1>
                </motion.div>
                {/* BIG HEADING END */}

                {/* INTRO START */}
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] relative"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="font-light mb-4">
                        👋 Hi, I Am{" "}
                        <span className="font-semibold text-xl">Prabesh Gupta</span>
                    </div>
                    <div className="max-w-[510px]">
                        I am a skilled web developer with a passion for graphic designing. I specialize in developing visually stunning and user-friendly websites.
                        My proficiency in graphic designing allows me to create amazing contents that enhance the overall online experience.
                    </div>
                </motion.div>
                {/* INTRO END */}

                {/* PERSON BLOCK START */}
                <motion.div
                    className="w-[300px] md:w-[360px] 2xl:w-[475px] absolute bottom-0 left-[50%] -translate-x-1/2"
                    initial={{ y: 200, x: "-50%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={man} alt="Prabesh Gupta - Portfolio Image" />

                    {/* HIRE ME BUTTON START */}
                    {/* <div
                        className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full bg-white/[0.7] flex justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
                        onClick={handleDownload}
                    >
                        <div className="flex items-center">
                            <div className="text-black text-center text-[18px]">Download<br />CV</div>
                            <img
                                src={externalLinkIcon}
                                alt="Hire Prabesh Gupta- Web Developer and Designer"
                                className="w-[15px] mt-5 ml-[-16px]"
                            />
                        </div>
                    </div> */}

                    <a
                        href="https://app.sajilocv.com/cv/a830f84d-763f-4c00-80a3-cb68e893c7c8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-[140px] -right-10 2xl:top-[240px] 2xl:-right-10 w-[140px] h-[140px] rounded-full bg-white/[0.7] flex justify-center items-center gap-2 backdrop-blur-sm cursor-pointer transition-transform scale-[0.65] md:scale-100 active:scale-[0.55] md:active:scale-90"
                    >
                        <div className="flex items-center">
                            <div className="text-black text-center text-[22px] leading-tight">
                                View<br />CV
                            </div>
                            <img
                                src={externalLinkIcon}
                                alt="View Prabesh Gupta's CV"
                                className="w-[12px] mt-5 rotate-[-90deg]"
                            />
                        </div>
                    </a>
                    {/* HIRE ME BUTTON END */}
                </motion.div>
                {/* PERSON BLOCK END */}
            </Wrapper>
        </div>
    );
};

export default HeroBanner;
