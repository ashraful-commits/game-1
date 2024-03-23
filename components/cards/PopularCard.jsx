import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PopularCard(props) {
    const game = props.data
    return (
        <div className="overflow-hidden bg-[#1C1C24] w-full mt-4 rounded-[20px] shadow-lg hover:shadow-[#494949] transition">
            <Link href={game.url}>
                <Image width={200} height={200} className='w-full' src={game.imgUrl} alt='' />
            </Link>
            <Link href={game.url}>
                <div className="text_area p-5">
                    <h3 className="font-bold text-[18px]">{game.name}</h3>
                </div>
            </Link>
        </div>
    )
}
