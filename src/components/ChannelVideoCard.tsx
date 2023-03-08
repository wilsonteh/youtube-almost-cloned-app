import { displayDecimalNum } from "../utils/Utils";

const ChannelVideoCard = ({ data: video } : any) => {

  return (
    <a href={`/video/${video.id}`}> 
      <div className="relative z-[-10]">
        <div className="">
          <img className="rounded-xl" src={video.thumbnail} alt={video.title} />
        </div>
        <span className="bg-[hsla(0,0%,0%,0.8)] text-white font-medium text-xs px-1 
          rounded-sm absolute bottom-1 right-1">
          { video.lengthText }
        </span>
      </div>

      <div className="flex flex-col">
        <div className="font-medium text-sm line-clamp-2 my-2"> { video.title } </div>

        <div className="flex gap-1 text-xs text-[hsl(0,0%,38%)]">
          <span> { displayDecimalNum(video.viewCount) } views </span>
          <span>•</span>
          <span> { video.publishedText } </span>
        </div>
      </div>

    </a>
  );
}

export default ChannelVideoCard;