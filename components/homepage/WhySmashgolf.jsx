import React from 'react'
import Link from 'next/link'
export default function WhySmashgolf() {
    return <section className="smash_golf py-[50px] bg-[url('/bg_3.jpg')] md:py-[180px] bg-cover bg-center max-md:bg-left">
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-6 md:col-span-4">
                    <h3 className="uppercase text-[18px] md:text-[20px] lg:text-[24px] mb-[0px] md:mb-[-5px] text-white">WHY DID WE START THE</h3>
                    <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] leading-[1.2] md:leading-[1.4] mb-2 md:mb-0">SMASH GOLF TOUR</h2>
                    <p className="mb-4 max-w-[520px] text-white !font-sans">
                        Traditionally, golf has been a hard game to get into for large segments of the community. There are tons of barriers that keep people from ever trying the game. It&#39;s expensive, intimidating, and difficult.
                    </p>
                    <p className="max-w-[520px] text-white !font-sans">
                        We&#39;ve cracked the code that the golf industry has been wrestling with for decades...How do we make golf inviting, fair and accessible to everyone?
                    </p>
                    <Link className="inline-block  rounded-md text-[15px]  text-white bg-[#3F83F8] px-[25px] py-[12px] mt-10 hover:text-[#3F83F8] hover:bg-[#fff] font-russo_one uppercase" href="#">Get Started</Link>
                </div>
                <div className="col-span-6 md:col-span-2">
                </div>
            </div>
        </div>
    </section >
}
