import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import Image from 'next/image'
import leaderboards from "../../public/data/leaderboards.json"

export default function LeaderBoards() {
    return (
        <>
            <div className="flex justify-between items-center mb-2">
                <h4 className='text-xl text-white font-semibold mb-1'>Leaderboards</h4>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Image width={20} height={20} className='inline-block cursor-pointer' src="./dots.svg" alt="" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Option</DropdownMenuLabel>
                        <DropdownMenuLabel>Option</DropdownMenuLabel>
                        <DropdownMenuLabel>Option</DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
            {leaderboards.map((leaderboard, index) => (
                <div className="single_leader flex justify-between items-center gap-5 w-full mt-5" key={index}>
                    <div className="profile flex items-center gap-4">
                        <Image
                            width={50} height={50}
                            className="w-[50px] border-[3px] border-[#ffffffb3] rounded-xl"
                            src={leaderboard.imgUrl}
                            alt=''
                        />
                        <div className="info">
                            <h4 className="text-xl text-white mb-1 max-sm:text-[16px] max-sm:font-semibold">{leaderboard.name}</h4>
                            <p className="text-[#92929D] text-xs max-sm:text-[10px]">
                                ID #{leaderboard.id} &#9679; <span className="text-[#3DD598]">{leaderboard.points} Point</span>
                            </p>
                        </div>
                    </div>
                    <div className="match flex items-center gap-2 bg-[#25252c] py-[7px] px-3 rounded-2xl w-[145px] max-sm:w-[120px]">
                        <Image width={18} height={18} className="w-[18px]" src={leaderboard.gameImg} alt="" />
                        <span className="text-sm text-white max-sm:text-[10px]">{leaderboard.gameName}</span>
                    </div>
                </div>
            ))}
        </>
    )
}
