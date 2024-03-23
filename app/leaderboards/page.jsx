import React from 'react'

import SmashCoin from "../../components/leaderboards/SmashCoin";
import DataTable from "../../components/leaderboards/DataTable";
import ResponsiveContainer from "../../components/ResponsiveContainer"
import DataTableCard from '../../components/cards/DataTableCard';
import Achievements from '../../components/leaderboards/Achievements';

export default function Leaderboards() {
    return (
        <>
            <div className="flex flex-col">
                <h4 className='text-xl text-white font-semibold mb-4'>Dobson Ranch Golf Course</h4>
                <ResponsiveContainer minWidth={1024}>
                    <DataTable />
                </ResponsiveContainer>

                <ResponsiveContainer maxWidth={1024}>
                    <DataTableCard />
                </ResponsiveContainer>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-8/1 max-xl:w-full">
                    <Achievements />
                </div>
                <div className="w-4/12 max-xl:hidden">
                    <SmashCoin />
                </div>
            </div>
        </>
    )
}
