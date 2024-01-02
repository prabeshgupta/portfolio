import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const Testimonials = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
    return (
        <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img
                className="sec-4-p-e-1 rellax"
                style={{ y: y1 }}
                src={pe1}
            />
            <motion.img
                className="sec-4-p-e-2 rellax"
                style={{ y: y2 }}
                src={pe2}
            />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* SECTION HEADING START */}
                <Div className="mb-10 relative">
                    <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
                        Client Says
                    </div>
                    <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                        Discover what my clients have to say about my services.
                    </div>
                </Div>
                {/* SECTION HEADING END */}

                {/* CAROUSEL START */}
                <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
                    <Carousel>
                        {/* SLIDE START */}
                        <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                            <div className="mb-[25px]">
                                <img
                                    src="https://media.licdn.com/dms/image/D5603AQE_hVF7xJo1CA/profile-displayphoto-shrink_800_800/0/1691853036322?e=1701907200&v=beta&t=1tCMtog3qBamu8mXK39RgwEiet-h0wrVTGSN9F8vtwE"
                                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                                    alt="Prabesh Gupta - Graphic Designer Client"
                                />
                                <div className="font-bold">Shovit Nepal</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                    Graphic Designer Client
                                </div>
                            </div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                Working with Prabesh on our graphic design project was fantastic. He understood our needs perfectly and delivered stunning designs that exceeded our expectations. His attention to detail and creativity truly made our brand come to life. We're thrilled with the results and would definitely recommend Prabesh for his exceptional graphic design services.
                            </div>
                        </div>
                        {/* SLIDE END */}
                        {/* SLIDE START */}
                        <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                            <div className="mb-[25px]">
                                <img
                                    src="https://media.licdn.com/dms/image/D4D03AQEqBStLC-fZYA/profile-displayphoto-shrink_400_400/0/1671113638623?e=1701907200&v=beta&t=6FeDsVjmKCT3NUgy1eCAwk6nHCA9dw4C68E1sAlQpoM"
                                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                                    alt="Prabesh - UX/UI Client"
                                />
                                <div className="font-bold">Yasmini Gyawali</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                    UX/UI Client
                                </div>
                            </div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                Prabesh's UX/UI design services were simply outstanding.His attention to detail, creativity, and ability to adapt to feedback truly set him apart. I wholeheartedly recommend Prabesh for his exceptional UX/UI design services.
                            </div>
                        </div>
                        {/* SLIDE END */}
                        {/* SLIDE START */}
                        <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
                            <div className="mb-[25px]">
                                <img
                                    src="https://media.licdn.com/dms/image/D5603AQEkoEtRJ4Qm1A/profile-displayphoto-shrink_800_800/0/1687681072089?e=1701907200&v=beta&t=2lyP5XOgo2KSqWqW-1xh2BY5Iy-3VwAivlaoiV9WAwU"
                                    className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                                    alt="Prabesh - Web developer Client"
                                />
                                <div className="font-bold">Pranav Sapkota</div>
                                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                    Web developer Client
                                </div>
                            </div>
                            <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                                I had the pleasure of working with him for my web development needs, and I must say, he exceeded all my expectations. His real skills transformed my vision into a stunning and functional website. From the initial concept to the final launch, he was attentive to every detail and ensured that the site not only looked great but also performed accurately. His communication throughout the process was exceptional, keeping me informed and engaged at every step.
                            </div>
                        </div>
                        {/* SLIDE END */}
                    </Carousel>
                </Div>
                {/* CAROUSEL END */}
            </Wrapper>
        </div>
    );
};

export default Testimonials;
