import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function TournamentsCard(props) {
    const tournament = props.data
    return (
        <div className="overflow-hidden bg-[#1C1C24] w-full mt-4  rounded-2xl shadow-lg hover:shadow-[#494949] transition">
            <Image width={200} height={200} className="w-full" src={tournament.imgUrl} alt='' />
            <div className="text_area p-5">
                <p className="text-sm font-light mb-1">
                    {tournament.date}
                </p>
                <h3 className="font-bold text-[21px]">{tournament.name}</h3>
                <div className="flex items-center justify-between gap-4 mt-4">
                    <div className="text-left">
                        <p className="text-sm text-[#A0A0A0] mb-1">Prize</p>
                        <p className="text-[13px] flex gap-1">
                            <Image width={14} height={14} src="/trophy.svg" alt='' /> ${tournament.prize}
                        </p>
                    </div>
                    <div className="text-left">
                        <p className="text-sm text-[#A0A0A0] mb-1">Participant</p>
                        <p className="text-[13px] flex gap-1">{tournament.participant} Joined</p>
                    </div>
                    <div className="button">
                        <Link href={tournament.url} className="inline-block bg-[#0062FF] rounded-xl text-sm font-semibold py-3 px-4 transition hover:text-[#0062FF] hover:bg-[#fff]">
                            Join
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
