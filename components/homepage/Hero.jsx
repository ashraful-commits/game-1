import React from 'react'

export default function Hero() {
    return <section className="hero_area pb-[50px] pt-[300px] md:pt-[400px] bg-[url('/hero_bg.jpg')] bg-cover bg-center overlay">
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-6">
                    <h1 className="text-white text-[40px] md:text-[60px] lg:text-[90px] uppercase text-center mb-4 md:mb-0 leading-[1.2] font-russo_one">SMASH GOLF TOUR</h1>
                    <div className="hero_pley_btn text-center">
                        <div className="inline-block uppercase mt-1 text-center bg-[#3F83F8]  py-[7px] md:py-[12px] px-[20px] md:px-[70px] text-[20px] sm:text-[24px] md:text-[40px] lg:text-[60px] rounded-tl-[20px] rounded-br-[20px] md:rounded-tl-[50px] md:rounded-br-[50px]  tracking-[0em] md:tracking-[0.1em] delay-300 font-russo_one" href="#">play. compete. win</div>
                    </div>
                </div>
            </div>
        </div>
    </section >
}
