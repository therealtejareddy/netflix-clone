import axios from 'axios'
import React, { useState, useEffect } from 'react'
import requests from '../Requests'


function Main() {
    const [movies, setMovies] = useState([]);
    let movie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
      axios.get(requests.popular).then(res => {
          setMovies(res.data.results)
      })
    },[])
    console.log(movie)
  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
                <div className='my-6'>
                    <button className='border bg-gray-300 py-2 px-5 text-black cursor-pointer'>Play Now</button>
                    <button className='border text-white ml-6 py-2 px-5 cursor-pointer'>Watch Later</button>
                </div>
                <p className='text-gray-300 text-sm'>Released On : {movie?.release_date}</p>
                <p className='w-full md:max-w-[75%] lg:max-w-[50%] text-gray-200'>{movie?.overview}</p>
            </div>
        </div>
    </div>
  )
}

export default Main