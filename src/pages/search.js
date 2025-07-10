import { useRouter } from 'next/router';
import { videoData, VideoCard } from '../components/VideoCard';
import {useState,useEffect} from 'react';
export default function SearchPage() {
const [videoData, setVideoData] = useState(null);
const [loading, setLoading] = useState(true);
  
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
        },2000)
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
  const router = useRouter();
  const searchQuery = (router.query.query || '').toString().toLowerCase();

  if (!router.isReady) return <p className="p-4">Loading...</p>;
console.log(searchQuery)
console.log(transformed)

const results = transformed?.filter(video =>
  video.title.toLowerCase().split(' ').some(word => word.includes(searchQuery)) ||
  video.description.toLowerCase().includes(searchQuery) ||
  video.channelName.toLowerCase().includes(searchQuery)
);


  return (
    loading?<p>Loading...</p>:
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Search Results for: <span className="text-blue-500">{router.query.query}</span>
      </h2>

      {results?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {results.map((video, index) => (
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
      ) : (
        <p className="text-gray-500">No videos found.</p>
      )}
    </div>
  );
}
