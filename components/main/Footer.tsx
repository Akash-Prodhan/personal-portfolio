import React from "react";
import {
    RxGithubLogo,
    RxInstagramLogo,
    RxLinkedinLogo,
} from "react-icons/rx";


const Footer = () => {
    return (
        <footer className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex items-center justify-between sm:px-10 m-auto border-t border-[#86868649] mt-14 py-6 ">
                <div className="">
                    <div className="flex flex-col gap-3">
                        <a href="#home" className="flex gap-2 justify-start items-center z-50 cursor-pointer text-[#ddd] hover:text-white">
                            <img src="/namelogo.png" alt="" className="w-5" />
                            Akash Prodhan
                        </a>
                        <a href="mailto:contactakash72@gmail.com" target="_blank" className="hover:text-white hover:underline flex gap-2 max-sm:text-sm justify-start items-center text-[#a0a0a0] z-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4">
                                <rect width="20" height="16" x="2" y="4" rx="2">
                                </rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7">
                                </path>
                            </svg>
                            contactakash72@gmail.com
                        </a>
                        <div className="flex gap-2 max-sm:text-sm justify-start items-center text-[#a0a0a0]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-4 h-4 text-gray-400">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                </path>
                            </svg>
                            +00 0000000000
                        </div>
                    </div>
                    <div className="flex justify-start items-center mt-12 sm:mt-20 text-[#858585] text-[12px] sm:text-sm">
                        Akash Prodhan © 2025. All rights reserved.
                    </div>
                </div>
                <div className="flex flex-col gap-4 justify-end items-center self-start">
                    <h3>Connect</h3>
                    <ul className="flex justify-center items-center gap-6 z-50">
                        <li className="">
                            <a href="https://github.com/Akash-Prodhan" target="_blank" className="">
                                <RxGithubLogo className="scale-125" />
                            </a>
                        </li>
                        <li className="">
                            <a href="https://www.linkedin.com/in/akash-prodhan/" target="_blank" className="">
                                <RxLinkedinLogo className="scale-125" />
                            </a>
                        </li>
                        <li className="">
                            <a href="https://www.instagram.com/_akash_prodhan_/" target="_blank" className="">
                                <RxInstagramLogo className="scale-125" />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </footer>
    )
}

export default Footer