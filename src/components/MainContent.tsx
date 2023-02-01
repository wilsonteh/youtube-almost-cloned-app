import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const MainContent = () => {

  const [videoList, setVideoList] = useState([]);

  // useEffect(() => {
  // }, [])
    
  const fetchVideos = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '11f6926eedmshcb72d26a5c1ed22p145c4cjsn77082c63295d',
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
      }
    };
    
    fetch('https://yt-api.p.rapidapi.com/trending?geo=MY', options)
      .then(res => res.json())
      .then(res => {
        setVideoList(res.data)
        console.log(res.data)
      })
      .catch(err => console.error(err));

  }


  return (
    <>
      <button onClick={fetchVideos} className="bg-teal-500 px-4 py-1 rounded-2xl">
        Fetch videos
      </button>

      <div className="p-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-[16px] gap-y-[48px]">

        { videoList?.map(video => (
          <VideoCard key={video.videoId} videoData={video}/>
        ))}

      </div>
    
    </>
  );
}

 
export default MainContent;