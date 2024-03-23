import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function LiveEvents() {
    return <section className="bg-black pt-[50px] pb-[100px] md:py-[100px]">
        <div className="container mx-auto px-5">
            <div className="section_top text-center mb-4">
                <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">LIVE EVENTS</h2>
                <p className="text-md sm:text-xl text-white !font-sans">Watch all the action live on <Link className="text-[#009FC9]" href="#">Instagram</Link></p>
            </div>
            <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-6 ms:col-span-3 md:col-span-2">
                    <div className="single_box relative p-[18px] border border-[#ffffff37] rounded-2xl overflow-hidden z-[1] blur_bg mt-7 shadow-lg hover:border-[#009FC9] transition h-full w-full bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                        <Image width={400} height={200} className="rounded-2xl w-full" src="/live_event_1.png" alt='' />
                    </div>
                </div>
                <div className="col-span-6 ms:col-span-3 md:col-span-2">
                    <div className="single_box relative p-[18px] border border-[#ffffff37] rounded-2xl overflow-hidden z-[1] blur_bg mt-7 shadow-lg hover:border-[#009FC9] transition h-full w-full bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                        <Image width={400} height={200} className="rounded-2xl w-full" src="/live_event_2.png" alt='' />
                    </div>
                </div>
                <div className="col-span-6 md:col-span-2">
                    <div className="single_box relative p-[18px] border border-[#ffffff37] rounded-2xl overflow-hidden z-[1] blur_bg mt-7 shadow-lg hover:border-[#009FC9] transition h-full w-full bg-blue-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
                        <Image width={400} height={200} className="rounded-2xl w-full" src="/live_event_3.png" alt='' />
                    </div>
                </div>
            </div>
        </div>
    </section >
}
