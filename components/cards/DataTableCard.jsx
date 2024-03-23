import React from 'react'
import Image from 'next/image'
import { Trophy } from 'lucide-react'

export default function DataTableCard() {
    return (
        <>
            <div className='bg-lightblue mb-4 p-10 rounded-lg max-sm:p-4'>
                <div className="flex items-center rounded-md justify-between max-sm:flex-col">
                    <div className='w-6/12 flex items-center max-sm:w-full'>
                        <div className='w-[50px] border-[#44444F] border-4 rounded-lg overflow-hidden'>
                            <Image className='w-full' width={50} height={50} src="/t1.jpg" alt="" />
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-lg font-semibold'>
                                Lily Saunders
                            </h4>
                            <div className="flex items-center">
                                <span className='text-[#92929D]'>ID #3124</span>
                                <span className='px-1 text-[#92929D]'>&#9679;</span>
                                <span className='text-[#3DD598]'>
                                    120 Point
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 flex items-center justify-between max-sm:w-full max-sm:mt-4">
                        <div>
                            <h4 className='text-[#92929D]'>Rank</h4>
                            <span className='block pt-2'>1</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Gross</h4>
                            <span className='block pt-2'>190</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Net</h4>
                            <span className='block pt-2'>185</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Handicap</h4>
                            <span className='block pt-2'>11</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center mt-5 max-sm:flex-col max-sm:items-start">
                    <div>
                        <span className='text-[#92929D] text-sm block mb-2'>Smashcup</span>
                        <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                            <Trophy color='#FFD233' size={15} />
                            <span>$2500</span>
                        </span>
                    </div>
                    <div className='ml-10 max-sm:ml-0 max-sm:mt-4'>
                        <span className='text-[#92929D] text-sm block mb-2'>Most Played</span>
                        <div className="flex items-center">
                            <span className='mr-2 flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" />
                                <span className='ml-2'>Real Golf 2011</span>
                            </span>
                            <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" />
                                <span className='ml-2'>Golfer</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-lightblue mb-4 p-10 rounded-lg max-sm:p-4'>
                <div className="flex items-center rounded-md justify-between max-sm:flex-col">
                    <div className='w-6/12 flex items-center max-sm:w-full'>
                        <div className='w-[50px] border-[#44444F] border-4 rounded-lg overflow-hidden'>
                            <Image className='w-full' width={50} height={50} src="/t1.jpg" alt="" />
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-lg font-semibold'>
                                Lily Saunders
                            </h4>
                            <div className="flex items-center">
                                <span className='text-[#92929D]'>ID #3124</span>
                                <span className='px-1 text-[#92929D]'>&#9679;</span>
                                <span className='text-[#3DD598]'>
                                    120 Point
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 flex items-center justify-between max-sm:w-full max-sm:mt-4">
                        <div>
                            <h4 className='text-[#92929D]'>Rank</h4>
                            <span className='block pt-2'>1</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Gross</h4>
                            <span className='block pt-2'>190</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Net</h4>
                            <span className='block pt-2'>185</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Handicap</h4>
                            <span className='block pt-2'>11</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center mt-5 max-sm:flex-col max-sm:items-start">
                    <div>
                        <span className='text-[#92929D] text-sm block mb-2'>Smashcup</span>
                        <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                            <Trophy color='#FFD233' size={15} />
                            <span>$2500</span>
                        </span>
                    </div>
                    <div className='ml-10 max-sm:ml-0 max-sm:mt-4'>
                        <span className='text-[#92929D] text-sm block mb-2'>Most Played</span>
                        <div className="flex items-center">
                            <span className='mr-2 flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" alt='' />
                                <span className='ml-2'>Real Golf 2011</span>
                            </span>
                            <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" alt='' />
                                <span className='ml-2'>Golfer</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-lightblue mb-4 p-10 rounded-lg max-sm:p-4'>
                <div className="flex items-center rounded-md justify-between max-sm:flex-col">
                    <div className='w-6/12 flex items-center max-sm:w-full'>
                        <div className='w-[50px] border-[#44444F] border-4 rounded-lg overflow-hidden'>
                            <Image className='w-full' width={50} height={50} src="/t1.jpg" alt="" />
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-lg font-semibold'>
                                Lily Saunders
                            </h4>
                            <div className="flex items-center">
                                <span className='text-[#92929D]'>ID #3124</span>
                                <span className='px-1 text-[#92929D]'>&#9679;</span>
                                <span className='text-[#3DD598]'>
                                    120 Point
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 flex items-center justify-between max-sm:w-full max-sm:mt-4">
                        <div>
                            <h4 className='text-[#92929D]'>Rank</h4>
                            <span className='block pt-2'>1</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Gross</h4>
                            <span className='block pt-2'>190</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Net</h4>
                            <span className='block pt-2'>185</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Handicap</h4>
                            <span className='block pt-2'>11</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center mt-5 max-sm:flex-col max-sm:items-start">
                    <div>
                        <span className='text-[#92929D] text-sm block mb-2'>Smashcup</span>
                        <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                            <Trophy color='#FFD233' size={15} />
                            <span>$2500</span>
                        </span>
                    </div>
                    <div className='ml-10 max-sm:ml-0 max-sm:mt-4'>
                        <span className='text-[#92929D] text-sm block mb-2'>Most Played</span>
                        <div className="flex items-center">
                            <span className='mr-2 flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" alt='' />
                                <span className='ml-2'>Real Golf 2011</span>
                            </span>
                            <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" alt='' />
                                <span className='ml-2'>Golfer</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-lightblue mb-4 p-10 rounded-lg max-sm:p-4'>
                <div className="flex items-center rounded-md justify-between max-sm:flex-col">
                    <div className='w-6/12 flex items-center max-sm:w-full'>
                        <div className='w-[50px] border-[#44444F] border-4 rounded-lg overflow-hidden'>
                            <Image className='w-full' width={50} height={50} src="/t1.jpg" alt="" />
                        </div>
                        <div className='ml-4'>
                            <h4 className='text-lg font-semibold'>
                                Lily Saunders
                            </h4>
                            <div className="flex items-center">
                                <span className='text-[#92929D]'>ID #3124</span>
                                <span className='px-1 text-[#92929D]'>&#9679;</span>
                                <span className='text-[#3DD598]'>
                                    120 Point
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 flex items-center justify-between max-sm:w-full max-sm:mt-4">
                        <div>
                            <h4 className='text-[#92929D]'>Rank</h4>
                            <span className='block pt-2'>1</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Gross</h4>
                            <span className='block pt-2'>190</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Net</h4>
                            <span className='block pt-2'>185</span>
                        </div>
                        <div>
                            <h4 className='text-[#92929D]'>Handicap</h4>
                            <span className='block pt-2'>11</span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center mt-5 max-sm:flex-col max-sm:items-start">
                    <div>
                        <span className='text-[#92929D] text-sm block mb-2'>Smashcup</span>
                        <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                            <Trophy color='#FFD233' size={15} />
                            <span>$2500</span>
                        </span>
                    </div>
                    <div className='ml-10 max-sm:ml-0 max-sm:mt-4'>
                        <span className='text-[#92929D] text-sm block mb-2'>Most Played</span>
                        <div className="flex items-center">
                            <span className='mr-2 flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" alt='' />
                                <span className='ml-2'>Real Golf 2011</span>
                            </span>
                            <span className='flex items-center bg-[#30303A] rounded-full text-center justify-center text-sm py-1 px-4'>
                                <Image className='rounded-full' width={14} height={14} src="/golf.jpg" alt='' />
                                <span className='ml-2'>Golfer</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <button className='w-full bg-[#0062FF] rounded-lg p-5 mb-5'>
                View More
            </button>
        </>
    )
}
