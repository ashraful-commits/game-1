'use client'
import React from 'react'
import achievements from "../../public/data/achievements.json"
import ResponsiveContainer from '../ResponsiveContainer'
import AchivementCard from "../../components/cards/AchivementsCards";
import AchivementCardSlider from "../../components/AchivementSlider";


export default function Achievements() {
    return (
        <div className='bg-lightblue rounded-lg p-4'>
            <h4 className='text-xl text-white font-semibold mb-2'>Achievements</h4>
            <ResponsiveContainer minWidth={1080}>
                <div className="grid grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                        <AchivementCard data={achievement} key={index} />
                    ))}
                </div>
            </ResponsiveContainer>

            <ResponsiveContainer maxWidth={1080}>
                <AchivementCardSlider data={achievements} />
            </ResponsiveContainer>
        </div>
    )
}
