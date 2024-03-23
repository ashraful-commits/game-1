import React from 'react'
import LeaderBoards from '../../components/newsfeed/LeaderBoards'
import Slider from '../../components/newsfeed/Slider'
import UpcomingEvents from '../../components/newsfeed/UpcomingEvents'
import UpcomingTournaments from '../../components/newsfeed/UpcomingTournaments'
import PopularGames from '../../components/newsfeed/PopularGames'

export default function page() {
    return (
        <>
            <h1 className='mb-5 text-white text-2xl font-semibold ml-2'>Hi James, <span className='!text-sm font-light text-[#92929D]'>Welcome to Smash Golf Tour</span> </h1>
            <div className="flex max-xl:flex-col mb-4">
                <div className="w-7/12 max-xl:w-full xl:mr-2">
                    <Slider />
                </div>
                <div className="w-5/12 max-xl:w-full max-xl:mt-4 bg-lightblue rounded-[20px] xl:ml-2 p-5">
                    <LeaderBoards />
                </div>
            </div>
            <div className="flex">
                <div className="w-full">
                    <UpcomingEvents />
                </div>
            </div>
            <div className="mt-5">
                <UpcomingTournaments />
            </div>
            <div className="mt-5 mb-16">
                <PopularGames />
            </div>
        </>
    )
}



