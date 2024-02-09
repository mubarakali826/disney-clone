import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../services/GlobalApi'
import { HiChevronRight, HiChevronLeft} from "react-icons/hi";


const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth=window.innerWidth;
function Slider() {
    const [movieList,setMovieList]=useState([]);
    const elementRef=useRef();

    useEffect(()=>{
     getTrendingMovies()
    },[])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            setMovieList(resp.data.results);
        })
    }
    const SliderRight=(element)=>{
    element.scrollLeft+=screenWidth-110
    }
    const SliderLeft=(element)=>{
    element.scrollLeft-=screenWidth-110
    }
  return (
    <div>
    <HiChevronLeft className="md:block hidden text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer" onClick={()=>SliderLeft(elementRef.current)}/>
    <HiChevronRight className='md:block hidden text-white text-[30px] absolute right-0 mx-8 mt-[150px] cursor-pointer' onClick={()=>SliderRight(elementRef.current)}/>
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef}>
    {movieList.map((item,index)=>(
      <img src={IMAGE_BASE_URL+item.backdrop_path}  className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] transition-all duration-100 ease-in border-gray-400"alt="" />
      ))}
      </div>
      
    </div>
  )
}

export default Slider;
