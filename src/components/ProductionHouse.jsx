import React, { useRef } from 'react'
import disney from "../assets/images/disney.png"
import marvel from "../assets/images/marvel.png"
import nationalG from "../assets/images/nationalG.png"
import pixar from "../assets/images/pixar.png"
import starwar from "../assets/images/starwar.png"


import starwarV from "../assets/videos/star-wars.mp4"
import disneyV from "../assets/videos/disney.mp4"
import marvelV from "../assets/videos/marvel.mp4"
import nationalGeographicV from "../assets/videos/national-geographic.mp4"
import pixarV from "../assets/videos/pixar.mp4";


function ProductionHouse() {
    const ProductionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:marvel,
            video:marvelV
        },
        {
            id:3,
            image:nationalG,
            video:nationalGeographicV
        },
        {
            id:4,
            image:pixar,
            video:pixarV
        },
        {
            id:5,
            image:starwar,
            video:starwarV
        },
       
    ]
    ProductionHouseList.forEach((item) => {
        item.videoRef = useRef(null);
    });

    const playVideo = (videoRef) => {
        if (videoRef.current.paused) {
            videoRef.current.play().catch((error) => {
                console.error('Failed to play video:', error);
            });
        }
    };

    const pauseVideo = (videoRef) => {
        if (!videoRef.current.paused) {
            videoRef.current.pause();
        }
    };

    return (
        <div className='flex gap-2 md:gap-5 p-2 md:px-16 px-5'>
            {ProductionHouseList.map((item) => (
                <div
                    key={item.id}
                    className='border-[2px] bg-gray-900 relative rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-black'
                    onMouseEnter={() => playVideo(item.videoRef)}
                    onMouseLeave={() => pauseVideo(item.videoRef)}
                >
                    <video
                        ref={item.videoRef}
                        src={item.video}
                        loop
                        playsInline
                        className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50'
                    ></video>
                    <img src={item.image} alt='' className='w-full z-[1]' />
                </div>
            ))}
        </div>
    );
}

export default ProductionHouse;