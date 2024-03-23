"use client"
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { EffectFade } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Clock4, ChevronRight, ChevronLeft } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay } from 'swiper/modules';

import slider from "../../public/data/slider.json"

export default function Slider() {
    const [swiper, setSwiper] = useState(null);
    const goNext = () => {
        if (swiper) {
            swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiper) {
            swiper.slidePrev();
        }
    };

    return (
        <div className='relative'>
            <Swiper onSwiper={(s) => setSwiper(s)}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop="true"
                modules={[EffectFade, Autoplay]} effect="fade"
                spaceBetween={30}
                slidesPerView={1} className="mySwiper rounded-xl">
                {slider.map((singleSlider, index) => (
                    <SwiperSlide
                        className="min-h-[420px] bg-cover bg-center !flex justify-center flex-col p-10 relative max-sm:min-h-[250px]"
                        style={{ backgroundImage: `url(${singleSlider.imgUrl})` }}
                        key={index}
                    >
                        <div className="absolute right-5 top-5 flex items-center text-white bg-gray-400/30 px-4 py-2 rounded-lg border-[#394049] border-2 text-sm">
                            <Clock4 />
                            <span className='ml-2'>
                                {singleSlider.time}
                            </span>
                        </div>
                        <h1 className='text-white text-4xl font-semibold leading-normal w-[400px] max-sm:text-[16px] max-sm:w-[200px]'>
                            {singleSlider.name}
                        </h1>
                        <button className='bg-blue2 text-black py-3 px-5 mt-5 delay-300 transition rounded-lg w-[170px] hover:bg-white max-sm:w-[140px] max-sm:text-xs'>
                            <Link href="{singleSlider.url}">
                                Get Started
                            </Link>
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='absolute right-5 bottom-5 z-50'>
                <button onClick={goPrev} className='bg-white/40 bg-opacity-70 m-2 p-2 rounded-full'>
                    <ChevronLeft />
                </button>
                <button onClick={goNext} className='bg-white/40 bg-opacity-70 m-2 p-2 rounded-full'>
                    <ChevronRight />
                </button>
            </div>
        </div>
    );
}
