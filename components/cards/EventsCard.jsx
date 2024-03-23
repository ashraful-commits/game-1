import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
export default function EventsCard(props) {
    const upcomingevent = props.data
    return (
        <div className="min-h-[400px] bg-cover bg-center flex justify-end flex-col p-5 w-full mt-4 rounded-2xl shadow-lg hover:shadow-[#494949] transition"
            style={{ backgroundImage: `url(${upcomingevent.imgUrl})` }}
        >
            <Link href={upcomingevent.url} className='relative'>
                <h3 className="font-bold text-[21px]">{upcomingevent.name}</h3>
                <p className="text-sm font-light mb-2">{upcomingevent.date}</p>
                <div className="bottom flex gap-2 items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <Image width={24} height={24} src="/ps5.svg" alt='' />
                        <span className="font-light">
                            <b className="font-bold">{upcomingevent.participants}</b> Participants
                        </span>
                    </div>
                    <div className="inline-block rounded-full bg-white/20 p-2">
                        <ChevronRight />
                    </div>
                </div>
            </Link>
        </div>
    )
}
