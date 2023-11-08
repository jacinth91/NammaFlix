import React from 'react'

const VideoTitle = (props) => {
  return (
    <div className='pt-[15%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black' >
        <h1 className='text-6xl font-bold'>{props.title}</h1>
        <p className='py-6 text-lg w-1/4'>{props.overview}</p>
        <div>
            <button className='bg-gray-500 rounded-lg bg-opacity-50 p-4 px-16 text-xl text-white'>▶️ Play</button>
            <button className='bg-gray-500 rounded-lg bg-opacity-50 p-4 px-12 text-xl text-white mx-2'>Video Title</button>
        </div>
    </div>
  )
}

export default VideoTitle