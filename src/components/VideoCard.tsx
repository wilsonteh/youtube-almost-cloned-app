import { useEffect, useState } from "react";

const VideoCard = ({ videoData }) => {

  const [videoCardData, setVideoCardData] = useState({
    videoId: "", 
    videoTitle: "", 
    thumbnailUrl: "", 
    viewCount: 0, 
    published: "", 
    length: "",
    channelId: "", 
    channelTitle: "", 
    channelPicUrl: "", 
  })

  let { videoId, title, channelId, channelTitle, viewCount, publishedText, lengthText } = videoData
  let { url: thumbnailUrl } = videoData.thumbnail[2]
  let { url: channelPicUrl } = videoData.channelThumbnail[0]
  
  useEffect(() => {
    setVideoCardData(prev => ({ 
      ...prev, 
      videoId, 
      videoTitle: title, 
      thumbnailUrl, 
      viewCount, 
      published: publishedText,
      length: lengthText,
      channelId, 
      channelTitle, 
      channelPicUrl,
    }))

  }, [])
  

  return (
    <a className="flex flex-col">
      <div className="relative">
        <a href={`video/${videoCardData.videoId}`}>
          <img className="rounded-xl" src={videoCardData.thumbnailUrl} 
            alt={videoCardData.videoTitle} />
        </a>
        <span className="bg-[hsla(0,0%,0%,0.8)] text-white font-medium text-xs px-1 
          rounded-sm absolute bottom-1 right-1">
          { videoCardData.length }
        </span>
      </div>

      <div className="pt-3 flex items-start">
        <div className="w-[42px] h-[42px]">
          <a href={`channel/${videoCardData.channelId}`}>
            <img className="rounded-full w-full" src={videoCardData.channelPicUrl} 
              alt={videoCardData.channelTitle} />
          </a>
        </div>

        <div className="flex flex-col px-3 w-full">
          <a href={`video/${videoCardData.videoId}`} 
            className="font-medium text-sm line-clamp-2"> 
            {videoCardData.videoTitle}
          </a>
          <a href={`channel/${videoCardData.channelId}`} 
            className="mt-2 text-xs text-[hsl(0,0%,38%)] w-fit"> 
            {videoCardData.channelTitle} 
          </a>
          <div className="text-xs text-[hsl(0,0%,38%)]">
            {videoCardData.viewCount} views • {videoCardData.published}
          </div>
        </div>
      </div>
    </a>

  );
}
 
export default VideoCard;