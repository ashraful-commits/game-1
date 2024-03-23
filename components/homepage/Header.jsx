
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "../../components/ui/popover"
import { getServerSession } from 'next-auth';
import SignOut from "../../components/Signout"

export default async function Header() {
    const session = await getServerSession()

    return <header className="header py-[10px] absolute top-0 left-0 w-full z-50">
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-10 gap-4 items-center">
                <div className="col-span-3">
                    <Link href="/" className="logo inline-block w-[105px]">
                        <Image src="/logo.svg" width={105} height={98} alt="logo" placeholder="blur" blurDataURL="data:..." />
                    </Link>
                </div>
                <div className="col-span-7 flex justify-end">
                    <div className="main_menu hidden md:block">
                        <ul className="flex space-x-6 items-center [&>li]:font-russo_one">
                            <li className="active">
                                <Link className="inline-block text-lg  text-[#3F83F8] hover:text-[#3F83F8] duration-300" href="#">Home</Link>
                            </li>
                            <li>
                                <Link className="inline-block text-lg  text-white hover:text-[#3F83F8] duration-300" href="#">About</Link>
                            </li>
                            <li>
                                <Link className="inline-block text-lg  text-white hover:text-[#3F83F8] duration-300" href="#">Videos</Link>
                            </li>
                            <li>
                                {session?.user?<Link className="inline-block text-lg  text-white hover:text-[#3F83F8] duration-300" href="/leaderboards">Leaderboards</Link>:<Link className="inline-block text-lg  text-white hover:text-[#3F83F8] duration-300" href="/signin">Leaderboards</Link>}
                                
                            </li>
                            <li>
                                <Link className="inline-block text-lg  text-white hover:text-[#3F83F8] duration-300" href="#">Contact</Link>
                            </li>
                            <li>
                            {session?.user ? 
                          <SignOut/>
                          :
                          <Link href='/register' className="inline-block text-lg text-white hover:text-[#3F83F8] bg-[#3F83F8] hover:bg-[#fff] skew-x-[-17deg] duration-300">
                             <span className="inline-block skew-x-[17deg] px-[20px] py-[5px]">Register</span>
                            </Link>
                            }
                            </li>
                            
                        </ul>
                    </div>
                    <div className='hidden max-md:block'>
                        <Popover>
                            <PopoverTrigger>
                                <div className='bg-black p-4 rounded-md'>
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"></path>
                                    </svg>
                                </div>
                            </PopoverTrigger>
                            <PopoverContent>
                                <ul className='text-center [&>li]:mb-2'>
                                    <li className='hover:text-[#3F83F8]'>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li className='hover:text-[#3F83F8]'>
                                        <Link href="/">About</Link>
                                    </li>
                                    <li className='hover:text-[#3F83F8]'>
                                        <Link href="/">Videos</Link>
                                    </li>
                                    <li className='hover:text-[#3F83F8]'>
                                        <Link href="/">Leaderboards</Link>
                                    </li>
                                    <li className='hover:text-[#3F83F8]'>
                                        <Link href="/">Contact</Link>
                                    </li>
                                    <li>
                            {session?.user ? 
                          <SignOut/>
                          :
                          <Link href='/register' className="inline-block text-lg text-white hover:text-[#3F83F8] bg-[#3F83F8] hover:bg-[#fff] skew-x-[-17deg] duration-300">
                             <span className="inline-block skew-x-[17deg] px-[20px] py-[5px]">Register</span>
                            </Link>
                            }
                            </li>
                                </ul>

                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    </header >

}
