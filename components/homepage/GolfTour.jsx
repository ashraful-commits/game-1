import React from 'react'
import Link from "next/link";
import Image from 'next/image';

export default function GolfTour() {
    return <section className="bg-black py-[100px] overflow-hidden">
        <div className="container mx-auto px-5">
            <div className="grid grid-cols-6 gap-4 items-center">
                <div className="col-span-6 lg:col-span-3">
                    <div className="grid grid-cols-2 gap-4 pr-[0px] lg:pr-[60px]">
                        <div className="col-span-1">
                            <Image width={300} height={300} className="w-full mb-4" src="/g_img_1.png" alt='' />
                            <Image width={300} height={300} className="w-full" src="/g_img_2.png" alt='' />
                        </div>
                        <div className="col-span-1">
                            <Image width={300} height={300} className="w-full mb-4 mt-[30px] sm:mt-[50px]" src="/g_img_4.png" alt='' />
                            <Image width={300} height={300} className="w-full" src="/g_img_3.png" alt='' />
                        </div>
                    </div>
                </div>
                <div className="col-span-6 lg:col-span-3">
                    <h3 className="text-[18px] md:text-[20px] lg:text-[24px] mt-10 lg:mt-0">WHAT IS THE SMASH GOLF TOUR?</h3>
                    <h2 className="gradiant_text font-extrabold text-transparent bg-clip-text text-[24px] md:text-[30px] xl:text-[45px] leading-[1.2] mt-2 mb-4 ">HOME OF GOLF&#39;S NON- TRADITIONAL CHAMPIONS</h2>
                    <p className="mb-4 max-w-[500px] text-white !font-sans">Smash Golf Tour (SGT) is the first ever virtual tour Powered by Toptracer Range hosted on Smashers On App. Play and perform on golf&#39;s most iconic courses while competing against friends and fellow golfers all over America.</p>
                    <p className="mb-4 text-white !font-sans">If you&#39;re the most non-traditional player or a purist,<br /> Smash Golf Tour is available to all golfers and here is why:</p>
                    <div className="single_list_item flex items-center w-full mb-5 mt-6 gap-4">
                        <div className="icon">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="23" fill="#FFA500" fillOpacity="0.2" />
                                <path d="M23 10C17.4085 10 12.8594 14.549 12.8594 20.1405C12.8594 27.0797 21.9342 37.2668 22.3206 37.6971C22.6835 38.1013 23.3171 38.1006 23.6794 37.6971C24.0657 37.2668 33.1405 27.0797 33.1405 20.1405C33.1404 14.549 28.5914 10 23 10ZM23 25.2424C20.1867 25.2424 17.8981 22.9537 17.8981 20.1405C17.8981 17.3272 20.1868 15.0386 23 15.0386C25.8132 15.0386 28.1018 17.3273 28.1018 20.1405C28.1018 22.9538 25.8132 25.2424 23 25.2424Z" fill="#FFA500" />
                            </svg>
                        </div>
                        <div className="text text-white">
                            <h4 className="text-lg">Compete At Any TopTracer Range</h4>
                            <p className='!font-sans'>Tee off against friends at any TopTracer range in the world.</p>
                        </div>
                    </div>
                    <div className="single_list_item flex items-center w-full mb-5 gap-4">
                        <div className="icon">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="23" fill="#FFA500" fillOpacity="0.2" />
                                <path d="M34.0039 18.7949H28.0898V35.6176H34.0039V18.7949Z" fill="#FFA500" />
                                <path d="M25.957 10.3828H20.0429V35.6172H25.957V10.3828Z" fill="#FFA500" />
                                <path d="M17.9141 27.2051H11.9999V35.6168H17.9141V27.2051Z" fill="#FFA500" />
                            </svg>
                        </div>
                        <div className="text text-white">
                            <h4 className="text-lg">Track Your Stats and Progress</h4>
                            <p className='!font-sans'>Asperiores nemo possimus nesciunt quam mollitia.</p>
                        </div>
                    </div>
                    <div className="single_list_item flex items-center w-full gap-4">
                        <div className="icon">
                            <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="23" cy="23" r="23" fill="#FFA500" fillOpacity="0.2" />
                                <path d="M22.6637 12.6406H22.6379C21.5439 12.6372 20.4933 13.0685 19.7173 13.8397C18.9413 14.6109 18.5034 15.6587 18.5 16.7528C18.4966 17.8468 18.9279 18.8973 19.6991 19.6733C20.4703 20.4494 21.5181 20.8872 22.6121 20.8906H22.6379C23.7319 20.8941 24.7825 20.4627 25.5585 19.6916C26.3345 18.9204 26.7724 17.8726 26.7758 16.7785C26.7792 15.6845 26.3479 14.6339 25.5767 13.8579C24.8056 13.0819 23.7577 12.6441 22.6637 12.6406Z" fill="#FFDA44" />
                                <path d="M33.4648 23.4688H11.8086V38.4219H33.4648V23.4688Z" fill="#FFDA44" />
                                <path d="M23.1523 23.4688L20.0586 26.5625H11.8086V23.4688H23.1523Z" fill="#B36500" />
                                <path d="M33.4648 23.4688V26.5625H25.7305L22.6367 23.4688H33.4648Z" fill="#B36500" />
                                <path d="M22.6367 23.4688L20.0586 26.0469H8.19922L10.7773 23.4688H22.6367Z" fill="#EE8700" />
                                <path d="M37.0742 26.0469H25.2148L22.6367 23.4688H34.4961L37.0742 26.0469Z" fill="#EE8700" />
                                <path d="M33.4648 30.6875H11.8086V32.75H33.4648V30.6875Z" fill="#E13957" />
                                <path d="M17.9961 26.0469H15.9336V38.4219H17.9961V26.0469Z" fill="#D80027" />
                                <path d="M17.9961 26.0469H15.9336V26.5625H17.9961V26.0469Z" fill="#BD0022" />
                                <path d="M13.3555 23.9844H11.8086C11.5238 23.9844 11.293 24.2152 11.293 24.5C11.293 24.7848 11.5238 25.0156 11.8086 25.0156H13.3555C13.6402 25.0156 13.8711 24.7848 13.8711 24.5C13.8711 24.2152 13.6402 23.9844 13.3555 23.9844Z" fill="#F2A239" />
                                <path d="M14.939 23.9844H14.8657C14.6012 23.9844 14.3867 24.1988 14.3867 24.4634V24.5366C14.3867 24.8012 14.6012 25.0156 14.8657 25.0156H14.939C15.2035 25.0156 15.418 24.8012 15.418 24.5366V24.4634C15.418 24.1988 15.2035 23.9844 14.939 23.9844Z" fill="#F2A239" />
                                <path d="M23.1523 16.25H22.1211C21.9843 16.25 21.8532 16.1957 21.7565 16.099C21.6598 16.0023 21.6055 15.8711 21.6055 15.7344C21.6055 15.5976 21.6598 15.4665 21.7565 15.3698C21.8532 15.2731 21.9843 15.2188 22.1211 15.2188H23.1523C23.2891 15.2188 23.4202 15.2731 23.5169 15.3698C23.6136 15.4665 23.668 15.5976 23.668 15.7344H24.6992C24.6992 15.3241 24.5362 14.9307 24.2461 14.6406C23.9561 14.3505 23.5626 14.1875 23.1523 14.1875V13.6719H22.1211V14.1875C21.7108 14.1875 21.3174 14.3505 21.0273 14.6406C20.7372 14.9307 20.5742 15.3241 20.5742 15.7344C20.5742 16.1446 20.7372 16.5381 21.0273 16.8282C21.3174 17.1183 21.7108 17.2812 22.1211 17.2812H23.1523C23.2891 17.2812 23.4202 17.3356 23.5169 17.4323C23.6136 17.529 23.668 17.6601 23.668 17.7969C23.668 17.9336 23.6136 18.0648 23.5169 18.1615C23.4202 18.2582 23.2891 18.3125 23.1523 18.3125H22.1211C21.9843 18.3125 21.8532 18.2582 21.7565 18.1615C21.6598 18.0648 21.6055 17.9336 21.6055 17.7969H20.5742C20.5742 18.2071 20.7372 18.6006 21.0273 18.8907C21.3174 19.1808 21.7108 19.3438 22.1211 19.3438V19.8594H23.1523V19.3438C23.5626 19.3438 23.9561 19.1808 24.2461 18.8907C24.5362 18.6006 24.6992 18.2071 24.6992 17.7969C24.6992 17.3866 24.5362 16.9932 24.2461 16.7031C23.9561 16.413 23.5626 16.25 23.1523 16.25Z" fill="#FF5023" />
                                <path d="M30.3711 15.2188H29.3398V16.25H30.3711V15.2188Z" fill="#FF5023" />
                                <path d="M30.3711 17.2812H29.3398V18.3125H30.3711V17.2812Z" fill="#FF5023" />
                                <path d="M29.3398 16.25H28.3086V17.2812H29.3398V16.25Z" fill="#FF5023" />
                                <path d="M31.4023 16.25H30.3711V17.2812H31.4023V16.25Z" fill="#FF5023" />
                                <path d="M15.9336 15.2188H14.9023V16.25H15.9336V15.2188Z" fill="#FF5023" />
                                <path d="M15.9336 17.2812H14.9023V18.3125H15.9336V17.2812Z" fill="#FF5023" />
                                <path d="M14.9023 16.25H13.8711V17.2812H14.9023V16.25Z" fill="#FF5023" />
                                <path d="M16.9648 16.25H15.9336V17.2812H16.9648V16.25Z" fill="#FF5023" />
                                <path d="M23.1523 8H22.1211V9.03125H23.1523V8Z" fill="#FF5023" />
                                <path d="M23.1523 10.0625H22.1211V11.0938H23.1523V10.0625Z" fill="#FF5023" />
                                <path d="M22.1211 9.03125H21.0898V10.0625H22.1211V9.03125Z" fill="#FF5023" />
                                <path d="M24.1836 9.03125H23.1523V10.0625H24.1836V9.03125Z" fill="#FF5023" />
                            </svg>
                        </div>
                        <div className="text text-white">
                            <h4 className="text-lg">Earn Smash Cash and Redeem Prizes in the Smash Shop!</h4>
                            <p className='!font-sans'>Asperiores nemo possimus nesciunt quam mollitia.</p>
                        </div>
                    </div>
                    <Link className="inline-block  rounded-md text-[15px]  text-white px-[25px] py-[12px] mt-10 hover:text-[#3F83F8] bg-[#3F83F8] hover:bg-[#fff] delay-300 transition-all font-russo_one" href="#">LEARN MORE</Link>
                </div>
            </div>
        </div>
    </section >
}
