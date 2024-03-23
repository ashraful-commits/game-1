import React from 'react'
import Image from 'next/image'

export default function Brands() {
    return (
        <section className="brand py-[100px] bg-[url('/dark_bg.jpg')] bg-[length:100%_100%] bg-center" id="brand" >
            <div className="container mx-auto px-5">
                <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[22px] sm:text-[24px] md:text-[30px] text-center leading-[1.2] md:leading-[1.4]">REEDEM SMASH CASH FOR GOLF&#39;S HOTTEST BRANDS</h2>
                <ul className="flex gap-10 items-center justify-center mt-10 flex-wrap">
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_1.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_2.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_3.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_4.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_5.png" alt='' />
                    </li>
                    <li>
                        <Image width={100} height={80} className="hover:scale-110 duration-300 md:max-w-full" src="/brand_6.png" alt='' />
                    </li>
                </ul>
            </div>
        </section>
    )
}
