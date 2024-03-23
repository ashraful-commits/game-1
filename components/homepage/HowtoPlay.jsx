import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HowtoPlay() {
    return < section className="how_to_play py-[100px] bg-[url('/bg_4.jpg')] bg-cover bg-center" id="how_to_play" >
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 md:col-span-3  text-center overflow-hidden">
                    <Image width={400} height={100} className="inline-block mt-4 md:max-w-full max-w-[70%]" src="/phone.png" alt='' />
                </div>
                <div className="col-span-6 md:col-span-3">
                    <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mb-[0px] md:mb-[-5px] mt-5 md:mt-0 text-white">
                        BECOME A SMASH GOLF CHAMPION
                    </h3>
                    <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">HOW TO PLAY</h2>
                    <p className="mb-4 max-w-[620px] text-white !font-sans">
                        <span className="text-[#2A7DF5] font-medium block">Step 1:</span>
                        Install SmashersON (50) App then use Google or Apple to register/log in
                    </p>
                    <p className="mb-4 max-w-[620px] text-white !font-sans">
                        <span className="text-[#2A7DF5] font-medium block">Step 2:</span>
                        On SO home page enter average 9 Hole score to establish handicap. (Only required once, handicap will update based on scores posted)
                    </p>
                    <p className="mb-4 max-w-[620px] text-white !font-sans">
                        <span className="text-[#2A7DF5] font-medium block">Step 3:</span>
                        Click Play Now then tap Events to view Live tournaments and contests
                    </p>
                    <p className="mb-4 max-w-[620px] text-white !font-sans">
                        <span className="text-[#2A7DF5] font-medium block">Step 4:</span>
                        Click the Icon displayed to view format, Smash Cash Purse, timeframe, leaderboard, rules, and who&#39;s playing
                    </p>
                    <p className="mb-4 max-w-[620px] text-white !font-sans">
                        <span className="text-[#2A7DF5] font-medium block">Step 5:</span>
                        To Enter the event click Register, complete and its game-time!!
                    </p>
                    <div className="double_btn">
                        <ul className="flex gap-0 sm:gap-5 items-center flex-col sm:flex-row">
                            <li>
                                <Link className="inline-flex gap-3 items-center rounded-md text-[14px] text-white px-[25px] py-[6px] mt-5 hover:text-[#3F83F8] bg-[#3F83F8] hover:bg-[#fff] duration-300" href="#">
                                    <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21.1632 20.3564C24.6862 18.3418 27.3572 16.8069 27.5874 16.6877C28.3236 16.2797 29.0843 15.2004 27.5874 14.362C27.1041 14.0984 24.5019 12.6111 21.1632 10.6934L16.5352 15.5606L21.1629 20.3564H21.1632Z" fill="#FFD900" />
                                        <path d="M16.5337 15.5615L1.79688 31.0283C2.14254 31.0761 2.53309 30.9805 2.99372 30.7169C3.96038 30.1661 14.2073 24.3384 21.162 20.3584L16.5337 15.5615Z" fill="#F43249" />
                                        <path d="M16.533 15.5614L21.1607 10.7178C21.1607 10.7178 4.02947 0.982035 2.99272 0.407566C2.60268 0.166017 2.16499 0.0946022 1.77344 0.166017L16.533 15.5611V15.5614Z" fill="#00EE76" />
                                        <path d="M16.5332 15.5611L1.77348 0.166016C1.17442 0.310158 0.668152 0.861259 0.668152 1.98788V29.2053C0.668152 30.2371 1.05996 30.9801 1.79617 31.0515L16.533 15.5609L16.5332 15.5611Z" fill="#00D3FF" />
                                    </svg>
                                    <span className=""><span>Download on the</span><span className="block text-xl mt-[-5px]">Google Play</span></span>
                                </Link>
                            </li>
                            <li>
                                <Link className="inline-flex gap-3 items-center rounded-md text-[14px] text-white bg-[#3F83F8] px-[25px] py-[6px] mt-5 hover:text-[#3F83F8] hover:bg-[#fff] duration-300 hover-icon" href="#">
                                    <svg width="32" height="38" fill="white" viewBox="0 0 32 38" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M31.1276 29.0218C30.5892 30.2769 29.924 31.4738 29.1424 32.5938C28.0982 34.0851 27.2407 35.1157 26.5835 35.6893C25.5626 36.6265 24.466 37.1088 23.2935 37.136C22.4535 37.136 21.4385 36.8968 20.2563 36.4107C19.0701 35.9265 17.9812 35.6893 16.9837 35.6893C15.9396 35.6893 14.8196 35.9265 13.6199 36.4107C12.4221 36.8968 11.4538 37.1515 10.7129 37.1749C9.59097 37.2235 8.46903 36.7296 7.35097 35.6893C6.63736 35.0671 5.74486 33.9976 4.67347 32.4849C3.52625 30.8729 2.58319 28.9965 1.84431 26.8635C1.05292 24.5554 0.65625 22.3232 0.65625 20.161C0.65625 17.6857 1.19097 15.5488 2.26236 13.7599C3.07271 12.3549 4.2312 11.1824 5.62625 10.3551C7.00188 9.53006 8.57225 9.08579 10.1763 9.06792C11.0707 9.06792 12.2432 9.34404 13.6957 9.88848C15.1482 10.4329 16.0815 10.709 16.4879 10.709C16.7951 10.709 17.8276 10.3843 19.5854 9.7407C21.244 9.14376 22.644 8.89681 23.7913 8.99404C26.9024 9.24487 29.2376 10.4699 30.7913 12.6788C28.0107 14.3646 26.636 16.7232 26.6632 19.7507C26.6865 22.1093 27.544 24.0713 29.224 25.6288C29.9668 26.3395 30.8334 26.9083 31.781 27.3068C31.5749 27.9038 31.3571 28.4735 31.1276 29.0218ZM23.9974 0.961537C23.9974 2.80876 23.3207 4.53543 21.9771 6.13181C20.3515 8.02959 18.3876 9.1282 16.2585 8.95515C16.2306 8.72286 16.217 8.48909 16.2176 8.25515C16.2176 6.47987 16.9876 4.58209 18.3624 3.02848C19.0468 2.24293 19.9179 1.58765 20.9737 1.06654C22.0276 0.553203 23.0232 0.269314 23.9604 0.220703C23.9857 0.469592 23.9974 0.716537 23.9974 0.961537Z"></path>
                                    </svg>
                                    <span className=""><span>Download on the</span><span className="block text-xl mt-[-5px] font-medium">App Store</span></span>
                                </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
