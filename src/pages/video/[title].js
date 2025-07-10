import React from 'react';

import AppBar from '@/components/AppBar';
import { useRouter } from 'next/router';
import { VideoGrid } from '@/components/VideoCard';
import ExpandableText from '@/components/expand';

const VideoPlay = () => {

const router = useRouter();
const { title, videoId, channelName, views, time, thumbnail, description } = router.query;
;

  return (
    <>
       <div className='fixed w-full z-50 mt-2 sm:mt-0' ><AppBar /></div>
<div className='absolute top-20 mt-2 w-full' >
      <div className="grid grid-col-1 md:grid-cols-3 gap-4 p-1">
        <div className="md:col-span-2 md:h-screen md:overflow-y-auto p-1">
          {videoId ? (
            <iframe
              className="w-full md:w-full md:h-[80%] mt-0"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`}
              title={title || 'YouTube video'}
       
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p className="text-red-500">No video ID found.</p>
          )}

          <div>
            <h1 className="text-xl font-bold mt-2">{title}</h1>
            <div className='flex items-center  gap-3'>
              <img src={thumbnail} className=' w-12 h-12 rounded-full flex' />
              <h2 className='text-blue-500'>{channelName}</h2>
            </div>
            <p className="text-sm mt-2 border-b-2 border-black text-gray-600">
              Published At {time}
            </p>
          </div>

          <div>
           <ExpandableText text={description?.slice(0, 700)} limit={100}/>
          </div>
        </div>
        <div className='flex justify-center w-full p-2'> 
        <VideoGrid className=' grid grid-cols-1 gap-4 p-1'/>

        </div>
      </div></div>
    </>
  );
};

export default VideoPlay;
