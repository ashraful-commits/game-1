import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HowWorks() {
    return <section className="bg-black py-[50px] md:py-[100px]">
        <div className="container mx-auto px-5">
            <div className="section_top text-center mb-20">
                <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">HOW IT WORKS</h2>
                <p className='text-white'>Register with Smash Golf Tour and connect with other gamers in the region. Connect, Compete and Win!</p>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center max-lg:grid-cols-1">
                <div>
                    <Image width={200} height={200} className="inline-block w-[200px]" src="/connect.png" alt='' />
                    <h2 className="text-white text-[24px] md:text-[40px] xl:text-[60px]">Connect</h2>
                    <p className="text-[18px] mb-6 md:mb-0 text-white mx-10 !font-sans">Play in our daily and weekly tournaments with friends and other gamers across the region. Or challenge your favourite influencers, YouTubers and content creators across different games.</p>
                </div>
                <div>
                    <Image width={200} height={200} className="inline-block w-[200px]" src="/vs.png" alt='' />
                    <h2 className="text-white text-[24px] md:text-[40px] xl:text-[60px]">Compete</h2>
                    <p className="text-[18px] mb-6 sm:mb-0 text-white mx-10 !font-sans">Compete and win rewards and real world prizes in our competitive esports tournaments designed for everyone.</p>
                </div>
                <div>
                    <Image width={200} height={200} className="inline-block w-[200px]" src="/win.png" alt='' />
                    <h2 className="text-white text-[24px] md:text-[40px] xl:text-[60px]">Win!</h2>
                    <p className="text-[18px] text-white mx-10 !font-sans">Earn Gold and convert them to cash and product prizes by competing in our tournaments.</p>
                </div>
            </div>
            <div className="learn_more_btn text-center">
                <Link className="inline-block  rounded-md text-[15px]  text-white px-[25px] py-[12px] mt-10 hover:text-[#3F83F8] bg-[#3F83F8] hover:bg-[#fff] font-russo_one" href="#">LEARN MORE</Link>
            </div>
        </div>
    </section >
}
