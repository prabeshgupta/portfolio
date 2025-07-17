import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/nepal-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>A Creative Designer</span>
                    <span className="flex items-center gap-2">
                        <span>Based</span>
                        <span>In Nepal&nbsp;</span>
                        <img
                            src={flag}
                            alt=""
                            className="w-[25px] md:w-[60px] 2xl:w-[80px] block mt-1 md:mt-2"
                        />
                    </span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative font-inter font-semibold text-gray-700">
                    Hello, my name is <strong>Prabesh Gupta</strong>. I am twenty-three years old. My birthday is on October 17. I currently reside in Kathmandu. My village is in Mahottari, Janakpur. I joined The Insight Vision Secondary School from nursery through fourth grade. Following that, I completed my studies at Nexus International Academy, where I received my first educational certificate. Then, for higher study, I enrolled in VS Niketan Higher Secondary School in the Science Faculty. Presently, I'm pursuing a Bachelor's Degree in Computer Applications.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative font-inter font-semibold text-gray-700">
                    With 3 years of experience, I've become really good at what I do. I'm not simply a web developer; I also enjoy using graphic design to make things appear extremely cool. My expertise lies in creating visually impressive and user-friendly websites using HTML, CSS, Javascript, along with various libraries and frameworks. Recently, I've also been involved in projects that make use of cutting-edge AI technology to help people better understand and interact with machines. <br /><br />
                    I'm also an excellent graphic designer. I create really unique stuff that makes the online experience even better. When I work on graphic design, I use tools like Adobe Photoshop, Adobe Illustrator, After Effects, Sony Vegas,Canva,Figma, and more. All of these tools help me create designs that look really amazing and catch people's attention in a really effective way.
                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative font-inter font-semibold text-gray-700">
                    When it comes to clients, my focus is clear. My main goal is to deliver the best possible work while keeping things cost-effective and efficient. I help my clients get more people interested in their products and services. I bring in new visitors, potential customers, and sales by connecting with valuable customers who are already looking for what my clients provide. I'm very friendly and can adapt whenever possible to the client's needs.
                </Div>
                {/* PARAGRAPH END */}
            </Wrapper>
        </div>
    );
};

export default AboutMe;
