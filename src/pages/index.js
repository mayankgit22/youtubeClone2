import {VideoCard,VideoGrid} from '@/components/VideoCard';
import React from 'react'
import AppBar from '../components/AppBar';


export default function Home() {

  return (
    < div id='home' >
      <AppBar />

      <VideoGrid />
      
    </div >
  );
}
