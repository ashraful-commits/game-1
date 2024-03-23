import React from 'react'
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="footer pb-[30px] pt-[80px] md:pt-[150px] bg-[#000] text-white">
            <div className="container mx-auto px-5">
                <div className="grid grid-cols-6 gap-4 items-center text-center">
                    <div className="col-span-6">
                        <Link href="/" className="mb-5 flex justify-center">
                            <Image src="/logo.svg" width={105} height={98} alt="logo" />
                        </Link>
                        <h3 className="text-[26px] md:text-[32px] mb-5 md:mb-2">Home of golf&#39;s non-traditional Champions</h3>
                        <div className="footer_menu">
                            <ul className="flex space-x-6 items-center justify-center flex-wrap [&>li]:font-russo_one [&>li]:px-5">
                                <li>
                                    <Link className="inline-block text-lg max-md:text-xs  text-white hover:text-[#3F83F8] delay-300" href="#">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="inline-block text-lg max-md:text-xs  text-white hover:text-[#3F83F8] delay-300" href="#">
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link className="inline-block text-lg max-md:text-xs  text-white hover:text-[#3F83F8] delay-300" href="#">
                                        Leaderboards
                                    </Link>
                                </li>
                                <li>
                                    <Link className="inline-block text-lg max-md:text-xs  text-white hover:text-[#3F83F8] delay-300" href="#">
                                        Videos
                                    </Link>
                                </li>
                                <li>
                                    <Link className="inline-block text-lg  max-md:text-xs text-white hover:text-[#3F83F8] delay-300" href="#">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="copy_right mt-10 max-md:text-sm font-russo_one">
                            <p>&copy; 2020-2023 Smash Golf Tour<sup className='text-[10px]'>TM</sup> All right reserved.</p>
                        </div>
                    </div>
                    <div className="col-span-3">
                    </div>
                </div>
            </div>
        </footer>
    )
}
