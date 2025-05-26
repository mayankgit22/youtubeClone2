import React from 'react';
import { useRouter } from 'next/router';
import { videoData } from '../../components/VideoCard'; // adjust path if needed
import { VideoCard } from '../../components/VideoCard'; // adjust path if needed
import AppBar from '@/components/AppBar';

const VideoPlay = () => {
  const router = useRouter();
  const { title } = router.query;

  // Find the video that matches the title
  const video = videoData.find(v => v.title === title);

  if (!video) return <p className="text-center p-4 text-red-500">Video not found</p>;

  return (<>
    <AppBar/>
    <div className=' grid grid-col-1  md:grid-cols-3 gap-2 p-1'>
      <div className='md:col-span-2 md:h-screen overflow-y-auto'>
       <video className='w-full h-full' src={`/${video.title}.mp4`} controls autoPlay />

        <h1 className='text-xl font-bold mt-2'>{video.title}</h1>
        <p className='text-sm text-gray-400'>
          {video.channelName} • {video.views} views • {video.time}
        </p>
      </div>

      <div className='col-span-1 border-2 border-blue-800'>
        <h1 className='text-2xl font-bold text-center'>Recommended Videos</h1>
        <div className='flex flex-col items-center gap-3 h-screen overflow-y-auto'>
          {videoData.map((v, i) => (
            <VideoCard
              key={i}
              type={v.type}
              title={v.title}
              thumbnail={v.thumbnail}
              channelName={v.channelName}
              channelImage={v.channelImage}
              views={v.views}
              time={v.time}
            />
          ))}
        </div>
      </div>
    </div>
              </>
  );
};

export default VideoPlay;
