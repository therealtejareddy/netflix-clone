import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { BsArrowRightCircle, BsArrowLeftCircle } from 'react-icons/bs'

function Row({title, uri,num}) {
    const [like, setLike] = useState(false)
    const [movies, setMovies] = useState([]);
    useEffect(() => {
      axios.get(uri).then(res => {
          setMovies(res.data.results)
      })
    },[uri])

    const slideLeft = () => {
        const slider = document.getElementById(`slide${num}`);
        slider.scrollLeft = slider.scrollLeft - 500;
        console.log(slider.scrollLeft)
    }

    const slideRight = () => {
        const slider = document.getElementById(`slide${num}`);
        slider.scrollLeft = slider.scrollLeft + 500;
        console.log('right')
    }

  return (
    <div className='group'>
        <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
        <div className='relative flex items-center'>
        <BsArrowLeftCircle onClick={slideLeft} className='cursor-pointer rounded-full hover:bg-black/60 scale-100 hover:scale-125 transition-all text-white text-4xl absolute left-10 z-20 opacity-0 group-hover:opacity-100'/>
        <BsArrowRightCircle onClick={slideRight} className='cursor-pointer rounded-full hover:bg-black/60 scale-100 hover:scale-125 transition-all text-white text-4xl absolute right-10 z-20 opacity-0 group-hover:opacity-100'/>
            <div id={`slide${num}`} className=" px-4 w-full h-full overflow-x-scroll overflow-y-hidden scrollbar-hide scroll-smooth relative whitespace-nowrap">
                {
                    movies.map((item,id) => (
                            <div key={id} className='w-[160px] md:w-[240px] lg:w-[280px] sm:w-[200px] inline-block cursor-pointer relative p-2 hover:scale-125 hover:z-10 transition-transform overflow-hidden'>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute top-0 left-0 h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 hover:scale-100 text-white'>
            <p className='white-space-normal md:text-sm text-xs font-bold flex items-center justify-center h-full text-center'>{item?.title}</p>
            <p>
                {like ? <FaHeart className='absolute top-6 left-4'/> : <FaRegHeart className='absolute top-4 left-4'/>}
            </p>                        
        </div>
    </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Row