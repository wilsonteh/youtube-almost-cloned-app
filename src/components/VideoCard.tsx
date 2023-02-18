import { useEffect, useState } from "react";
import { displayDecimalNum } from "../utils/Utils";

const VideoCard = ({ data: video }: any) => {

  const [videoCard, setVideoCard] = useState({
    videoId: "", 
    title: "", 
    thumbnailUrl: "", 
    viewCount: 0, 
    published: "", 
    length: "",
    channelId: "", 
    channelTitle: "", 
    channelPicUrl: "", 
  })

  let { videoId, title, channelId, channelTitle, viewCount, publishedText, lengthText } = video
  let { url: thumbnailUrl } = video.thumbnail[2]
  let { url: channelPicUrl } = video.channelThumbnail[0]
  
  useEffect(() => {
    setVideoCard(prev => ({ 
      ...prev, 
      videoId, 
      title, 
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
    <a href={`video/${videoCard.videoId}`} className="flex flex-col">
      <div className="relative z-[-10]">
        <a href={`video/${videoCard.videoId}`}>
          <img className="rounded-xl" src={videoCard.thumbnailUrl} 
            alt={videoCard.title} />
        </a>
        <span className="bg-[hsla(0,0%,0%,0.8)] text-white font-medium text-xs px-1 
          rounded-sm absolute bottom-1 right-1">
          { videoCard.length }
        </span>
      </div>

      <div className="pt-3 flex items-start">
        <div className="w-[42px] h-[42px]">
          <a href={`channel/${videoCard.channelId}`}>
            <img className="rounded-full w-full" src={videoCard.channelPicUrl} 
              alt={videoCard.channelTitle} />
          </a>
        </div>

        <div className="flex flex-col px-3 w-full">
          <a href={`video/${videoCard.videoId}`} 
            className="font-medium text-sm line-clamp-2"> 
            { videoCard.title }
          </a>
          <a href={`channel/${videoCard.channelId}`} 
            className="mt-2 text-xs text-[hsl(0,0%,38%)] w-fit"> 
            { videoCard.channelTitle } 
          </a>
          <div className="text-xs text-[hsl(0,0%,38%)]">
            { displayDecimalNum(String(videoCard.viewCount)) } views • {videoCard.published}
          </div>
        </div>
      </div>
    </a>

  );
}
 
export default VideoCard;