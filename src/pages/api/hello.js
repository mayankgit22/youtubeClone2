export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/playlistItems?part=status,snippet,contentDetails&playlistId=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj&maxResults=200&key=AIzaSyAXAdWW3nfvCnL63wi8R3rHGly1IWQV0sA"
    );

    const data = await response.json();
    res.status(200).json({"videoId":data.items.map((item)=>item.contentDetails.videoId),
    "videoTitle":data.items.map((item)=>item.snippet.title),
    "time":data.items.map((item)=>item.snippet.publishedAt),
    "views":data.items.map((item)=>item.contentDetails.viewCount),
    "status":data.items.map((item)=>item.status.embeddable),
    "url":data.items.map((item)=>`https://www.youtube.com/watch?v=${item.contentDetails.videoId}`),
    "channelName":data.items.map((item)=>item.snippet.channelTitle),
    "thumbnail":data.items.map((item)=>item.snippet.thumbnails.medium.url),
    "description":data.items.map((item)=>item.snippet.description),
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data", detail: error });
  }
}
