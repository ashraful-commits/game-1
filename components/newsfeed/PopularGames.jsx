import React from 'react'
import Link from 'next/link'
import games from "../../public/data/games.json"
import PopularCard from '../cards/PopularCard'
import ResponsiveContainer from '../ResponsiveContainer'
import PopularSlider from '../PopularSlider'

export default function PopularGames() {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className='text-xl font-semibold'>Most Popular Golf Games</h1>
                <Link className='text-sm' href="/">See All</Link>
            </div>

            <ResponsiveContainer minWidth={1080}>
                <div className="grid grid-cols-4 gap-4">
                    {games.map((game, index) => (
                        <PopularCard data={game} key={index} />
                    ))}
                </div>
            </ResponsiveContainer>

            <ResponsiveContainer maxWidth={1080}>
                <PopularSlider data={games} />
            </ResponsiveContainer>

        </>
    )
}
