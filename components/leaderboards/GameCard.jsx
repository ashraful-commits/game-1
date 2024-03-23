import React from 'react'
import Image from 'next/image'

const games = [
    {
        name: "Dobson Ranch Golf Course",
        image: "/g1.jpg"
    }, {
        name: "Palm Beach National",
        image: "/golf.jpg"
    }, {
        name: "Bali Hai",
        image: "/golfer.png"
    }, {
        name: "Flick Golf",
        image: "/golf.jpg"
    }
]

const getImageByName = (nameToFind) => {
    const foundGame = games.find(game => game.name === nameToFind);
    return foundGame ? foundGame.image : null;
};

export default function GameCard(props) {
    const row = props.data
    return (
        <>
            {
                row.original.mostPlayed.map((game, index) => (
                    <div key={index} className="text-center bg-[#292932] rounded-full ml-2 flex items-center justify-center  px-5 min-w-[40px] py-2">
                        <Image className='mr-2' src={getImageByName(game)} width={20} height={20} alt='' />
                        <span className='text-wrap'>{game}</span>
                    </div>
                ))
            }
        </>
    )
}
