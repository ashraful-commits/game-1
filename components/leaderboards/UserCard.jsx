import Image from 'next/image'
import React from 'react'

export default function UserCard(props) {
    const row = props.data
    return (
        <div className='flex items-center'>
            <div className='w-[50px] border-[#44444F] border-4 rounded-lg overflow-hidden'>
                <Image className='w-full' width={50} height={50} src={row.original.player.image} alt="" />
            </div>
            <div className='ml-4'>
                <h4 className='text-lg font-semibold'>
                    {row.original.player.name}
                </h4>
                <div className="flex items-center">
                    <span className='text-[#92929D]'>ID #{row.original.player.id}</span>
                    <span className='px-1 text-[#92929D]'>&#9679;</span>
                    <span className='text-[#3DD598]'>
                        {row.original.player.point} Point
                    </span>
                </div>
            </div>
        </div>
    )
}
