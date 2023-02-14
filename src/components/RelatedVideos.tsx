import { displayDecimalNum } from "../utils/Utils";

const RelatedVideos = ({ data: relatedVideos }: any) => {

  return (
    <div className="pt-6 pr-12 gap-2 w-full flex flex-col md:w-2/3 lg:w-full lg:grid lg:grid-cols-2 
      xl:flex xl:flex-col">

      { relatedVideos.map((relatedVid: any) => (

        <div key={relatedVid.videoId} className="grid grid-cols-[1fr_1.2fr] border-red-400">
          <a href={`/video/${relatedVid.videoId}`} className="relative">
            <img className="rounded-md" 
              src={ relatedVid.thumbnail[1].url } alt={ relatedVid.title } />
            <span className="bg-[hsla(0,0%,0%,0.8)] text-white font-medium text-xs px-1 
            rounded-sm absolute bottom-1 right-1">
              { relatedVid.lengthText }
            </span>
          </a>

          <div className="flex flex-col px-2">
            <a href={`/video/${relatedVid.videoId}`} 
              className="text-sm font-medium line-clamp-2 mb-1">
              { relatedVid.title }
            </a>
            <a href={`/channel/${relatedVid.channelId}`} className="text-xs text-[hsl(0,0%,38%)]">
              { relatedVid.channelTitle }
            </a>
            <div className="text-xs text-[hsl(0,0%,38%)] flex gap-1">
              <span> { displayDecimalNum(relatedVid.viewCount) } views</span>
              •
              <span> { relatedVid.publishedTimeText } </span>
            </div>
          </div>
        </div>

      ))}

    </div>
  );
}
 
export default RelatedVideos;