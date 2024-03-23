import React from 'react'
import Link from 'next/link'
import upcomingtournaments from "../../public/data/upcomingtournaments.json"
import Image from 'next/image'
import TournamentsCard from '../cards/TournamentsCard'
import ResponsiveContainer from "../../components/ResponsiveContainer"
import TournamentsSlider from '../TournamentsSlider'
export default function UpcomingTournaments() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className='text-xl font-semibold'>Upcoming Tournaments</h1>
                <Link className='text-sm' href="/">See All</Link>
            </div>

            <ResponsiveContainer minWidth={1080}>
                <div className="grid grid-cols-4 gap-4">
                    {upcomingtournaments.map((tournament, index) => (
                        <TournamentsCard data={tournament} key={index} />
                    ))}
                </div >
            </ResponsiveContainer>

            <ResponsiveContainer maxWidth={1080}>
                <TournamentsSlider data={upcomingtournaments} />
            </ResponsiveContainer>
        </>
    )
}
