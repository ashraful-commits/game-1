'use client'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import EventsCard from '../components/cards/EventsCard';

// Import Swiper styles
import "swiper/css";

export default function EventSlider(props) {
    const data = props.data
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    991: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }} className="mySwiper">
                {data.map((upcomingevent, index) => (
                    <SwiperSlide key={index}>
                        <EventsCard data={upcomingevent} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
