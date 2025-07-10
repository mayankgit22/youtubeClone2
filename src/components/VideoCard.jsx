import React, { useEffect } from 'react'
import Link from 'next/link';

 export  function VideoCard(props) {
// console.log({VideoCard, videoData});

    return (
        <>
            <div className='grid grid-rows-2  p-1 min-w-90 max-w-96 min-h-80 max-h-100  border-2  border-blue-600     rounded-lg shadow-md '>
                <div className='grid row-span-2  p-0 m-0  '>
                   {/* import Link from 'next/link'; */}

<Link href={{
  pathname: '/video/[title]',
  query: {
    title: props.title,
    thumbnail: props.thumbnail,
    channelImage: props.channelImage,
    channelName: props.channelName,
    views: props.views,
    time: props.time,
    videoId:props.videoId,
    description:props.description
  }
}} 
as={`/video/${encodeURIComponent(props.title)}`
}
>
  <img src={props.thumbnail} alt="Video Thumbnail" className='w-96 max-h-90 min-h-50 rounded-md' />
</Link>

                </div>
<div className='flex flex-row   min-h-28 max-h-32 mt-1'>
                <div className='grid grid-cols-12 p-0 w-full justify-center  mt-3'>
                    <img src = {props.channelImage?props.channelImag:'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt="H" className='w-12 col-span-2 h-12 max-h-100 rounded-3xl border-blue-700 border-2 justify-start  mr-0 ml-2' />
                    <div className='grid col-span-10 ml-2  '>
                        <h2 className=' text-sm md:text-md justify-start text-left '> {props.title }</h2>
                        <div className='grid text-sm text-red-600 '>
                          <p className='col-span-2 text-left'>{props.channelName}</p>
                      
                         
                        <p className='text-sm text-black/80 text-left'>{props.time}</p></div>
                        

        
                    </div>
                </div>
                </div> 
            </div>
        </>

    )
}



  export const VideoGrid = ({className}) => {
const [videoData, setVideoData] = React.useState(null);
const [loading, setLoading] = React.useState(true);
  
    useEffect(() => {
      setLoading(true);
      try{
        const fetchData= async () => {
          const data= await fetch('/api/hello')
          const res= await data.json();

          
          setVideoData(res);
     
          
        }
        fetchData();
      }
      catch{
        console.log('error at videoData fetch');
        
      }
      finally{
        setTimeout(() => {
          setLoading(false);
        },1000)
        // setLoading(false);
      }
      
    },[])
  const transformed =
    videoData?.videoId?.map((_, index) => ({
      videoId: videoData.videoId[index],
      title: videoData.videoTitle[index],
      url: videoData.url[index],
      channelName: videoData.channelName[index],
      description: videoData.description[index],
      thumbnail: videoData.thumbnail[index],
      time:videoData.time[index],
      status:videoData.status[index]
      
    })) || [];

// console.log(transformed);
    return (
    
        loading?<p className='text-center text-3xl'>Loading...</p>:<div className={className}>
          

{Array.isArray(transformed) && transformed.map((x, index) => (
  
  <VideoCard
  key={index}
    url={x.url}
    title= {x.title}
    thumbnail={x.thumbnail}
    channelImag={x.channelImag}
    channelName={x.channelName}
    views={x.views}
    time={x.time}
    description={x.description}
    videoId={x.videoId}
  />
))}
                  </div>
    )
}

// export   {videoData}
