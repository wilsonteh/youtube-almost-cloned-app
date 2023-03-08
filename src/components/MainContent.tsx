import { useLoaderData } from "react-router-dom";
import VideoCard from "./VideoCard";

const MainContent = () => {

  const trendingVideos: any = useLoaderData(); 
  
  return (  
    <div className="p-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-x-[16px] 
      gap-y-[48px]">

      { trendingVideos?.map(video => (
        <VideoCard key={video.videoId} data={video}/>
      ))}

    </div>
    
  );
}

 
export default MainContent;