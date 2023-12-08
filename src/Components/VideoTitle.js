import React from 'react';
import { FaPlay } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { IconButton } from './IconButton';
const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black '>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div className='flex my-4'>
        <IconButton Icon={FaPlay} className='bg-white text-black'>Play</IconButton>
        <IconButton Icon={CiCircleAlert} className='mx-2 bg-gray-400 text-white bg-opacity-50'>Learn More</IconButton>
      </div>
    </div>
  );
};

export default VideoTitle;
