import React from 'react'
import Link from 'next/link';

 export  function VideoCard(props) {
console.log({VideoCard, videoData});

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
    time: props.time
  }
}} as={`/video/${encodeURIComponent(props.title)}`}>
  <img src={props.thumbnail} alt="Video Thumbnail" className='w-96 max-h-90 min-h-50 rounded-md' />
</Link>

                </div>
<div className='flex flex-row   min-h-28 max-h-32 mt-1'>
                <div className='grid grid-cols-12 p-0 w-full justify-center  mt-3'>
                    <img src = {props.channelImage} alt="icon" className='w-12 col-span-2 h-40px max-h-100 rounded-3xl border-blue-700 border-2 justify-start  mr-0 ml-2' />
                    <div className='grid col-span-10 ml-2  '>
                        <h2 className=' text-sm md:text-md justify-start '> {props.title }</h2>
                        <div className='grid text-sm text-red-600 '>
                          <p className='col-span-2'>{props.channelName}</p>
                        <p className='  text-sm text-black'>{props.views}</p>
                        <p className='text-sm text-black'>{props.time}</p></div>

        
                    </div>
                </div>
                </div> 
            </div>
        </>

    )
}
 export const videoData = [
  {
    type: "Movie",
    title: "Finding X wishes song  2025",
    thumbnail: "https://i.ytimg.com/an_webp/oFCb_wolkuI/mqdefault_6s.webp?du=3000&sqp=CKyx0sEG&rs=AOn4CLCCiR3iyYWjR7qbM2SVi6TJ0wjwOg",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "Universal Pictures",
    views: "3.7M",
    time: "4 days ago"
  },
  {
    type: "Music",
    title: "ILZAAM - ARJUN, KING   _ CARLA DENNIS _ From the album 'INDUSTRY' _ OFFICIAL MUSIC VIDEO",
    thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4j7K0c3g9S2y2f6r9tQ2m2d6a",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "Melody Makers",
    views: "1.6B",
    time: "7 months ago"
  },
  {
    type: "Gaming",
    title: "Ohdi Ankh Bhi Kamini Mera Dil Bhi Kamina _ Namar Gill _ Pooja & Patola _ New Punjabi Song 2022",
    thumbnail: "https://i.ytimg.com/vi/Xy1Pzu1yZGg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCjsAbYsJJO7rbG9uCSqg0runnJvw",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "GameOn!",
    views: "35.3M",
    time: "1 month ago"
  },
  {
    type: "Documentary",
    title: "Superstart punjabi song",
    thumbnail: "https://i.ytimg.com/an_webp/nbpbNAMDGI4/mqdefault_6s.webp?du=3000&sqp=CObZ0sEG&rs=AOn4CLAkOVCvMKglYeYVfJ8tXItipg0COQ",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "Deep Dive Docs",
    views: "107M",
    time: "3 months ago"
  },
  {
    type: "Tutorial",
    title: "Talhasong song 2025",
    thumbnail: "https://i.ytimg.com/vi/AbkEmIgJMcU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDySoMRcDQdDGRjOihISezhopHpTA",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "EditPro Academy",
    views: "8.8M",
    time: "8 months ago"
  },
  {
    type: "Comedy",
    title: "Tenuu le jana apne naal",
    thumbnail: "https://i.ytimg.com/vi/gA_WEWo7JYE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAnT1GrNN9hMyGv53i8LuCXNfq0uw",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "LaughStream",
    views: "142.6M",
    time: "8 months ago"
  },
  {
    type: "Travel",
    title: "TumMile Emraan hasmi song",
    thumbnail: "https://i.ytimg.com/vi/1bIhaZqMmuo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBzBW9QS7esby24gLiThr34cdZpVQ",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "Global Nomads",
    views: "24.5M",
    time: "3 years ago"
  },
  {
    type: "News",
    title: "TERI YAADON MEIN Song kk 2025",
    thumbnail: "https://i.ytimg.com/an_webp/WPLS94_3-JA/mqdefault_6s.webp?du=3000&sqp=CKDT0sEG&rs=AOn4CLBp7me_5ShKGfLOyDnasOHvALBB6Q",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "Daily Headlines",
    views: "91.9K",
    time: "2 days ago"
  },
  {
    type: "Animation",
    title: "Tu hi meri sab hai subah hai song 2024",
    thumbnail: "https://i.ytimg.com/vi/16e78n5x5mE/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFjRX9kVpaYNkrFW2UULEsbYnuWg",
    channelImage: "https://shorturl.at/8EbMp",
    channelName: "Toon Tails",
    views: "99.6M",
    time: "11 months ago"
  },

];


  export const VideoGrid = () => {
    return (
        <div className='grid grid-cols-1 gap-3 p-0 m-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {videoData.map((video, index) => (
                <VideoCard
                    key={index}
                    type={video.type}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    channelName={video.channelName}
                    channelImage={video.channelImage}
                    views={video.views}
                    time={video.time}
                />
            ))}
        </div>
    )
}

// export  {VideoCard}
