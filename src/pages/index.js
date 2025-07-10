import {VideoCard,VideoGrid} from '@/components/VideoCard';
import React from 'react'
import AppBar from '../components/AppBar';


export default function Home() {

  return (
    < div id='home' className='relative' >
    <div className='fixed w-full z-50 mt-2 sm:mt-0' ><AppBar /></div>
       
<div className='absolute top-20 mt-2 text-center' > <VideoGrid className={'grid grid-cols-1 gap-3 p-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'} /></div>
     
     </div >
  );
}
