'use client'
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TournamentsCard from "./cards/TournamentsCard";

// Import Swiper styles
import "swiper/css";

export default function TournamentsSlider(props) {
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
                        <TournamentsCard data={upcomingevent} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
