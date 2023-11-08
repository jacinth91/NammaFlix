import React, { useEffect } from 'react'
import Header from './Header'
import MainContainer from './mainContainer'
import { API_OPTIONS } from '../utills/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utills/movieSlice'

const Browse = () => {
  const dispatch = useDispatch();

 const getNowPlaying =async ()=>{
  const data =await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);

 const jsonData =await data.json();
 
  dispatch(addNowPlayingMovies(jsonData?.results))

 }

 useEffect(()=>{
    getNowPlaying()
 })

  return (
    <div>
      <div><Header/></div>
    <div><MainContainer/></div>
    </div>
    
  )
}

export default Browse
