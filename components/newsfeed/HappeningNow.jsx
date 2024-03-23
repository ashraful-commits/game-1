import React from 'react'
import happeningnow from "../../public/data/happeningnow.json"
import Image from 'next/image'

export default function HappeningNow() {
    return (
        <>
            <h1 className='text-xl font-semibold'>Happening Now</h1>
            {happeningnow.map((happening, index) => (
                <>
                    <div className="single_box mt-4 p-5 bg-[url('/happen_bg.png')] bg-[length:100%_100%] bg-center rounded-2xl" key={index}>
                        <div className="flex gap-4 items-center border-b border-[#484C52] pb-3 mb-3">
                            <Image width={40} height={40} className="h-[40px] rounded-full" src={happening.logo} alt='' />
                            <h3 className="text-xl font-semibold">{happening.name}</h3>
                        </div>
                        <div className="flex items-center gap-3 justify-between">
                            <div className="flex gap-3 items-center">
                                <div className="text-right">
                                    <p className="text-sm text-[#A0A0A0] mb-1">TEAM A</p>
                                    <p className="text-[13px]">{happening.teamA}</p>
                                </div>
                                <Image className="h-[45px]" src={happening.teamaImg} alt='' />
                            </div>
                            <p className="h-[40px] w-[50px] bg-[#494F56] rounded-3xl flex items-center justify-center">
                                {happening.teamAScore}
                            </p>
                            <Image width={50} height={40} className="w-[60px] mx-[10px]" src="/vvs.png" alt='' />
                            <p className="h-[40px] w-[50px] bg-[#494F56] rounded-3xl flex items-center justify-center">
                                {happening.teamBScore}
                            </p>
                            <div className="flex gap-3 items-center">
                                <Image width={45} height={40} className="h-[45px]" src={happening.teambImg} alt='' />
                                <div className="text-left">
                                    <p className="text-sm text-[#A0A0A0] mb-1">TEAM B</p>
                                    <p className="text-[13px]">{happening.teamB}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}
