import Link from 'next/link'
import React from 'react'
import upcomingevents from "../../public/data/upcomingevents.json"
import EventsCard from '../cards/EventsCard'
import EventSlider from '../EventSlider'
import ResponsiveContainer from '../../components/ResponsiveContainer';


export default function UpcomingEvents() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className='text-xl font-semibold'>Upcoming Events</h1>
                <Link className='text-sm' href="/">See All</Link>
            </div>
            <ResponsiveContainer minWidth={1080}>
                <div className="grid grid-cols-4 gap-4">
                    {upcomingevents.map((upcomingevent, index) => (
                        <EventsCard data={upcomingevent} key={index} />
                    ))}
                </div>
            </ResponsiveContainer>

            <ResponsiveContainer maxWidth={1080}>
                <EventSlider data={upcomingevents} />
            </ResponsiveContainer>
        </>
    )
}
