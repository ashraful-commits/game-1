import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function UpcomingTournament() {
    return (
        <>
            <section className="u_tournament bg-[url('/bg_2.png')] bg-cover bg-center overlay -mt-2 pb-[100px]">
                <div className="container mx-auto px-5">
                    <div className='py-10'>
                        <h4 className='text-white text-2xl text-center mt-10'>Powered By</h4>
                        <Image width={400} height={80} className="mx-auto" src="/top.svg" alt="" />
                    </div>
                    <div className="section_top text-center mb-4 py-[50px]">
                        <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">UPCOMING TOURNAMENTS</h2>
                        <p className="max-w-[550px] mx-auto text-white !font-sans">
                            We have a tournament almost everyday. <br />
                            Find your game, connect with your tribe and level up with D11!
                        </p>
                    </div>
                    <div className="grid grid-cols-6 gap-5 items-center">
                        <div className="col-span-6 md:col-span-3 lg:col-span-2">
                            <div className="single_box relative p-[20px] md:p-[18px] xl:p-[25px] border border-[#ffffff8c] rounded-2xl overflow-hidden z-[1] blur_bg mt-7 shadow-lg hover:shadow-[#FD3BBB] transition bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                                <Image width={400} height={80} className="rounded-2xl mb-4 w-full" src="/u_tournament_img_1.jpg" alt='' />
                                <div className="card_top_text flex justify-between items-center">
                                    <p className="text-[#FD3BBB]">Clostest-To-The-Pin</p>
                                    <Link className="text-[#FD3BBB] border-2 border-[#ffffff8c] rounded-2xl py-[4px] px-[10px] xl:px-[20px] text-sm font-medium  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" href="#">FREE ENTRY</Link>
                                </div>
                                <h3 className="text-2xl mt-3 mb-3 text-white">Metagoons Fornite Tournament</h3>
                                <div className="card_profile_area flex justify-between gap-5">
                                    <div className="profile flex items-center gap-3">
                                        <Image width={40} height={40} className="w-[45px]" src="/profile_1.png" alt='' />
                                        <div className="name">
                                            <h4 className="!font-sans text-base font-medium text-white">Hosted By</h4>
                                            <p className="text-[#FD3BBB] text-sm">Milca01</p>
                                        </div>
                                    </div>
                                    <div className="time">
                                        <h4 className="!font-sans text-base font-medium text-white">Time</h4>
                                        <p className="text-[#FD3BBB] text-sm">Oct 31. 11:00 AM</p>
                                    </div>
                                </div>
                                <div className="price_btn">
                                    <Link className="block  text-lg font-normal text-white bg-[#3F83F8] skew-x-[-17deg] px-[20px] py-[10px] xl:py-[15px] mt-5 hover:shadow-lg hover:shadow-blue-500/50" href="#">
                                        <span className="font-russo_one skew-x-[17deg] flex gap-3 items-center justify-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2484_1098)">
                                                    <path d="M1.5 2.25H4.125V1.5C4.125 0.670875 4.79588 0 5.625 0H18.375C19.2041 0 19.875 0.670875 19.875 1.5V2.25H22.5C23.3291 2.25 24 2.92088 24 3.75V6.75C24 9.02812 22.1531 10.875 19.875 10.875H19.839C19.4963 14.4975 16.6961 17.3985 13.125 17.9108V21H15.75C16.5791 21 17.25 21.6709 17.25 22.5V23.625C17.25 23.8324 17.0824 24 16.875 24H7.125C6.91763 24 6.75 23.8324 6.75 23.625V22.5C6.75 21.6709 7.42088 21 8.25 21H10.875V17.9108C7.30387 17.3985 4.50375 14.4975 4.161 10.875H4.125C1.84687 10.875 0 9.02812 0 6.75V3.75C0 2.92088 0.670876 2.25 1.5 2.25ZM21.75 6.75V4.5H19.875V8.625C20.9107 8.625 21.75 7.78575 21.75 6.75ZM9.108 7.893L10.2877 9.10312L10.0084 10.8146C9.98512 10.9564 10.0455 11.0989 10.1625 11.1818C10.227 11.2268 10.3031 11.25 10.3789 11.25C10.4411 11.25 10.5037 11.2346 10.5604 11.2031L12.0008 10.407L13.4411 11.2031C13.5671 11.2729 13.7216 11.2642 13.839 11.1814C13.9564 11.0985 14.0164 10.956 13.9931 10.8142L13.7137 9.10275L14.8935 7.89263C14.9917 7.79175 15.0255 7.64512 14.9805 7.51163C14.9355 7.37813 14.8204 7.28138 14.6816 7.26L13.0658 7.01325L12.3398 5.46712C12.2779 5.33512 12.1455 5.2515 12.0004 5.2515C11.8552 5.2515 11.7229 5.3355 11.661 5.46712L10.935 7.01325L9.31913 7.26C9.18038 7.28138 9.06488 7.37813 9.02025 7.51163C8.97563 7.64512 9.00975 7.79213 9.108 7.893ZM2.25 6.75C2.25 7.78575 3.08925 8.625 4.125 8.625V4.5H2.25V6.75Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2484_1098">
                                                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            100 USD</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 md:col-span-3 lg:col-span-2">
                            <div className="single_box relative p-[20px] md:p-[18px] xl:p-[25px] border border-[#ffffff8c] rounded-2xl overflow-hidden z-[1] blur_bg mt-7 shadow-lg hover:shadow-[#FFB800] transition  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                                <Image width={400} height={80} className="rounded-2xl mb-4 w-full" src="/u_tournament_img_2.png" alt='' />
                                <div className="card_top_text flex justify-between items-center" />
                                <div className='flex justify-between'>
                                    <p className="text-[#FFB800]">Longest Drive</p>
                                    <Link className="text-[#FFB800] border-2 border-[#ffffff8c] rounded-2xl py-[4px] px-[10px] xl:px-[20px] text-sm font-medium  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" href="#">FREE ENTRY</Link>
                                </div>
                                <h3 className="text-2xl mt-3 mb-3 text-white">Metagoons Fornite Tournament</h3>
                                <div className="card_profile_area flex justify-between gap-5">
                                    <div className="profile flex items-center gap-3">
                                        <Image width={40} height={40} className="w-[45px]" src="/profile_1.png" alt='' />
                                        <div className="name">
                                            <h4 className="!font-sans text-base font-medium text-white">Hosted By</h4>
                                            <p className="text-[#FFB800] text-sm">Milca01</p>
                                        </div>
                                    </div>
                                    <div className="time">
                                        <h4 className="!font-sans text-base font-medium text-white">Time</h4>
                                        <p className="text-[#FFB800] text-sm">Oct 31. 11:00 AM</p>
                                    </div>
                                </div>
                                <div className="price_btn">
                                    <Link className="font-russo_one block  text-lg font-normal text-white bg-[#3F83F8] skew-x-[-17deg] px-[20px] py-[10px] xl:py-[15px] mt-5 hover:shadow-lg hover:shadow-blue-500/50" href="#">
                                        <span className="skew-x-[17deg] flex gap-3 items-center justify-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2484_1098)">
                                                    <path d="M1.5 2.25H4.125V1.5C4.125 0.670875 4.79588 0 5.625 0H18.375C19.2041 0 19.875 0.670875 19.875 1.5V2.25H22.5C23.3291 2.25 24 2.92088 24 3.75V6.75C24 9.02812 22.1531 10.875 19.875 10.875H19.839C19.4963 14.4975 16.6961 17.3985 13.125 17.9108V21H15.75C16.5791 21 17.25 21.6709 17.25 22.5V23.625C17.25 23.8324 17.0824 24 16.875 24H7.125C6.91763 24 6.75 23.8324 6.75 23.625V22.5C6.75 21.6709 7.42088 21 8.25 21H10.875V17.9108C7.30387 17.3985 4.50375 14.4975 4.161 10.875H4.125C1.84687 10.875 0 9.02812 0 6.75V3.75C0 2.92088 0.670876 2.25 1.5 2.25ZM21.75 6.75V4.5H19.875V8.625C20.9107 8.625 21.75 7.78575 21.75 6.75ZM9.108 7.893L10.2877 9.10312L10.0084 10.8146C9.98512 10.9564 10.0455 11.0989 10.1625 11.1818C10.227 11.2268 10.3031 11.25 10.3789 11.25C10.4411 11.25 10.5037 11.2346 10.5604 11.2031L12.0008 10.407L13.4411 11.2031C13.5671 11.2729 13.7216 11.2642 13.839 11.1814C13.9564 11.0985 14.0164 10.956 13.9931 10.8142L13.7137 9.10275L14.8935 7.89263C14.9917 7.79175 15.0255 7.64512 14.9805 7.51163C14.9355 7.37813 14.8204 7.28138 14.6816 7.26L13.0658 7.01325L12.3398 5.46712C12.2779 5.33512 12.1455 5.2515 12.0004 5.2515C11.8552 5.2515 11.7229 5.3355 11.661 5.46712L10.935 7.01325L9.31913 7.26C9.18038 7.28138 9.06488 7.37813 9.02025 7.51163C8.97563 7.64512 9.00975 7.79213 9.108 7.893ZM2.25 6.75C2.25 7.78575 3.08925 8.625 4.125 8.625V4.5H2.25V6.75Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2484_1098">
                                                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            100 USD</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 lg:col-span-2">
                            <div className="single_box relative p-[20px] md:p-[18px] xl:p-[25px] border border-[#ffffff8c] rounded-2xl overflow-hidden z-[1] blur_bg mt-7 shadow-lg hover:shadow-[#3F83F8] transition  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                                <Image width={400} height={80} className="rounded-2xl mb-4 w-full" src="/u_tournament_img_3.png" alt='' />
                                <div className="card_top_text flex justify-between items-center">
                                    <p className="text-[#1FD2F1]">Longest Drive</p>
                                    <Link className="text-[#1FD2F1] border-2 border-[#ffffff8c] rounded-2xl py-[4px] px-[10px] xl:px-[20px] text-sm font-medium  bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10" href="#">FREE ENTRY</Link>
                                </div>
                                <h3 className="text-2xl mt-3 mb-3 text-white">Metagoons Fornite Tournament</h3>
                                <div className="card_profile_area flex justify-between gap-5">
                                    <div className="profile  flex items-center gap-3">
                                        <Image width={40} height={40} className="w-[45px]" src="/profile_1.png" alt='' />
                                        <div className="name">
                                            <h4 className="!font-sans text-base font-medium text-white">Hosted By</h4>
                                            <p className="text-[#1FD2F1] text-sm">Milca01</p>
                                        </div>
                                    </div>
                                    <div className="time ">
                                        <h4 className="!font-sans text-base font-medium text-white">Time</h4>
                                        <p className="text-[#1FD2F1] text-sm">Oct 31. 11:00 AM</p>
                                    </div>
                                </div>
                                <div className="price_btn">
                                    <Link className="block  text-lg font-normal text-white bg-[#3F83F8] skew-x-[-17deg] px-[20px] py-[10px] xl:py-[15px] mt-5 shadow-lg hover:shadow-blue-500/50" href="#">
                                        <div className="font-russo_one skew-x-[17deg] flex gap-3 items-center justify-center">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2484_1098)">
                                                    <path d="M1.5 2.25H4.125V1.5C4.125 0.670875 4.79588 0 5.625 0H18.375C19.2041 0 19.875 0.670875 19.875 1.5V2.25H22.5C23.3291 2.25 24 2.92088 24 3.75V6.75C24 9.02812 22.1531 10.875 19.875 10.875H19.839C19.4963 14.4975 16.6961 17.3985 13.125 17.9108V21H15.75C16.5791 21 17.25 21.6709 17.25 22.5V23.625C17.25 23.8324 17.0824 24 16.875 24H7.125C6.91763 24 6.75 23.8324 6.75 23.625V22.5C6.75 21.6709 7.42088 21 8.25 21H10.875V17.9108C7.30387 17.3985 4.50375 14.4975 4.161 10.875H4.125C1.84687 10.875 0 9.02812 0 6.75V3.75C0 2.92088 0.670876 2.25 1.5 2.25ZM21.75 6.75V4.5H19.875V8.625C20.9107 8.625 21.75 7.78575 21.75 6.75ZM9.108 7.893L10.2877 9.10312L10.0084 10.8146C9.98512 10.9564 10.0455 11.0989 10.1625 11.1818C10.227 11.2268 10.3031 11.25 10.3789 11.25C10.4411 11.25 10.5037 11.2346 10.5604 11.2031L12.0008 10.407L13.4411 11.2031C13.5671 11.2729 13.7216 11.2642 13.839 11.1814C13.9564 11.0985 14.0164 10.956 13.9931 10.8142L13.7137 9.10275L14.8935 7.89263C14.9917 7.79175 15.0255 7.64512 14.9805 7.51163C14.9355 7.37813 14.8204 7.28138 14.6816 7.26L13.0658 7.01325L12.3398 5.46712C12.2779 5.33512 12.1455 5.2515 12.0004 5.2515C11.8552 5.2515 11.7229 5.3355 11.661 5.46712L10.935 7.01325L9.31913 7.26C9.18038 7.28138 9.06488 7.37813 9.02025 7.51163C8.97563 7.64512 9.00975 7.79213 9.108 7.893ZM2.25 6.75C2.25 7.78575 3.08925 8.625 4.125 8.625V4.5H2.25V6.75Z" fill="white" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_2484_1098">
                                                        <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <span> 100 USD</span>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
