export default async function handler(req, res) {
  try {
   const playlistId = 'PL9bw4S5ePsEHQKZ4uTtbNXNQGjjOB8bRk&si=qnkNaaYGa2oAnfhZ';
const API_KEY = 'AIzaSyAXAdWW3nfvCnL63wi8R3rHGly1IWQV0sA';

const fetchAllPlaylistItems = async () => {
  let allItems = [];
  let nextPageToken = '';
  const maxResults = 50;

  do {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&playlistId=${playlistId}&maxResults=${maxResults}&key=${API_KEY}&pageToken=${nextPageToken}`
    );
    const data = await res.json();

    if (data.items) allItems.push(...data.items);

    nextPageToken = data.nextPageToken || '';
  } while (nextPageToken);

  return allItems;
};

fetchAllPlaylistItems().then((data) => {
  // res.json({"videoId":data.map((item) => item.contentDetails.videoId)});
  // console.log(itecms)// 
  res.status(200).json({"videoId":data.map((item)=>item.contentDetails.videoId),
    "videoTitle":data.map((item)=>item.snippet.title),
    "time":data.map((item)=>item.snippet.publishedAt),
    "views":data.map((item)=>item.contentDetails.viewCount),
    "status":data.map((item)=>item.status.embeddable),
    "url":data.map((item)=>`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`),
    "channelName":data.map((item)=>item.snippet.channelTitle),
    "thumbnail":data.map((item)=>item.snippet.thumbnails.medium?.url),
    "description":data.map((item)=>item.snippet.description),
    });
  // res.status(200).json(data);
 
});


    // const data = await response.json();
    // res.status(200).json({"videoId":data.map((item)=>item.contentDetails.videoId),
    // "videoTitle":data.map((item)=>item.snippet.title),
    // "time":data.map((item)=>item.snippet.publishedAt),
    // "views":data.map((item)=>item.contentDetails.viewCount),
    // "status":data.map((item)=>item.status.embeddable),
    // "url":data.map((item)=>`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`),
    // "channelName":data.map((item)=>item.snippet.channelTitle),
    // "thumbnail":data.map((item)=>item.snippet.thumbnails.medium.url),
    // "description":data.map((item)=>item.snippet.description),
    // });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data", detail: error });
  }
}
