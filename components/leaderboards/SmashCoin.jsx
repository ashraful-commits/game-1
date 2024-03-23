'use client'
import React from "react";
import { Send } from 'lucide-react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"


export default function SmashCoin() {
    return (
        <div className="smashcoin bg-[#1C1C24] rounded-md  p-6">
            <div className="smashcoin_inner bg-[#000000] text-center px-4 py-6 rounded-md">
                <p className="text-[#FAFAFB] text-[12px] py-2 px-4 rounded-2xl bg-[url('../public/smash-coin_bg.png')] bg-[length:100%_100%] bg-center inline-block">
                    EARN SMASH COIN
                </p>
                <h3 className="text-[20px] font-semibold mt-3">
                    Invite your friends <br /> and earn smash coin <br /> with referrals
                </h3>
                <form className="w-full">
                    <div className="flex items-cente p-2 bg-[#242634] mt-4 rounded">
                        <input
                            className="appearance-none bg-transparent border-none w-full text-white py-1 px-2 leading-tight focus:outline-none text-[12px]"
                            type="email"
                            placeholder="email address....."
                        />
                        <button
                            className="flex-shrink-0 bg-blue-700 hover:bg-blue-800 text-sm text-white py-1 px-3 rounded"
                            type="button"
                        >
                            <Send size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
