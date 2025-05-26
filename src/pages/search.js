import { useRouter } from 'next/router';
import { videoData } from '../components/VideoCard'; // adjust path
import {VideoCard} from '../components/VideoCard';
import { split } from 'postcss/lib/list';

export default function SearchPage() {
  const router = useRouter();
  const { query } = router.query || {};
console.log({VideoCard, videoData});

//   // Wait for router to be ready (on first render, router.query might be empty)
  // if (!router.isReady) return <p>Loading...</p>;

const searchQuery = (router.query.query || '').toLowerCase();
  const results = videoData.filter(video =>
    video.title.toLowerCase().includes(searchQuery) ||
    video.channelName.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Search Results for: <span className="text-blue-500">{query}</span>
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((video, index) => (
            <VideoCard key={index} 
            // key={index}
                    type={video.type}
                    title={video.title}
                    thumbnail={video.thumbnail}
                    channelName={video.channelName}
                    channelImage={video.channelImage}
                    views={video.views}
                    time={video.time} />
          ))}
        </div>
      ) : (
        <p>No videos found.</p>
      )}
    </div>
  );
}
