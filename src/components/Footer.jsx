import React from "react";

import Wrapper from "./Wrapper";
import gmailIcon from "../assets/email-icon.png";
import phoneIcon from '../assets/phone-icon.png';
import { scrollTo } from "../helper";

const Footer = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Wrapper>
                {/* NAVBAR START */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 2xl:mt-[63px] relative text-[#111111] border-t border-[#CCCCCC] py-10">
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-transparent flex justify-center items-center">

                            <img src={gmailIcon} alt="Prabesh Gupta - Contact Email" className="w-[32px]" />
                        </div>
                        <a href="mailto:prabeshgupta217@gmail.com">
                            <div>prabeshgupta217@gmail.com</div>
                        </a>
                    </div>
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-transparent flex justify-center items-center">
                            <img src={phoneIcon} alt="Prabesh Gupta - Contact Number" className="w-[32px]" />
                        </div>
                        <a href="tel:+9779748300278">
                            <div>+977 9818567521</div>
                        </a>
                    </div>
                    <ul className="flex 2xl:text-[20px] gap-5 md:gap-8">
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("work")}
                        >
                            Work
                        </li>
                        <li
                            className="cursor-pointer transition active:scale-90"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </div>
                {/* NAVBAR END */}
            </Wrapper >
        </div >
    );
};

export default Footer;
