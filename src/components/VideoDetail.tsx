import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLoaderData, useParams } from "react-router-dom";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { addCommaSeparator, displayDecimalNum, displayWholeNum } from "../utils/Utils";
import Comments from "./Comments";
import RelatedVideos from "./RelatedVideos";


const VideoDetail = () => {

  const { videoId } = useParams();
  const videoData: any = useLoaderData();
  const { video, comments } = videoData;

  return (
    <div className="grid grid-cols-[2fr_1fr]">

      <section className="border-red-500 p-6 pb-[56.25%] mx-0 my-auto">

        <div className="video-player relative pb-[56.25%] h-0">
          <iframe className="absolute top-0 left-0 w-full h-full" 
            width="640" height="360" src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>

        <div className="flex flex-col">
          {/* <div className="flex gap-[2px] text-xs text-blue-main mt-2">
            { video.superTitle.items.map((superTitle: string, i: number) => ( 
              <span key={i}> { superTitle } </span> 
            ))}
          </div> */}

          <h3 className="text-lg font-medium">
            { video.snippet.title }
          </h3>

          <div className="video-info flex justify-between items-center py-2">
            <div className="info-left flex-1 justify-start flex ">
              <div className="w-[40px] h-[40px]">
                <img className="rounded-full" 
                  src="https://yt3.ggpht.com/ytc/AL5GRJULssAv65kAcbxwOj5eL3mWdRWevKtfm7Ywfz5n=s88-c-k-c0x00ffffff-no-rj" 
                  alt="" />
              </div>

              <div className="flex flex-col ml-2 pr-8">
                <div className="font-medium"> {video.snippet.channelTitle } </div>
                {/* <div className="text-xs text-[hsl(0,0%,38%)]">
                  { video.author.stats.subscribersText }
                </div> */}
              </div>

              <button className="secondary-btn">
                <span className="text-sm font-medium px-1">Subscribe</span>  
              </button>  
            </div>

            <div className="info-right flex-1 justify-end flex border-red-600">

              <div className="bg-gray-main flex items-center rounded-full">
                <div className="flex gap-2 rounded-l-full cursor-pointer px-3 py-1 
                  hover:bg-[hsl(0,0%,88%)]">
                  <span>
                    <FontAwesomeIcon icon={faThumbsUp} className="text-lg" />
                  </span>
                  <span className=""> { displayWholeNum(video.statistics.likeCount) } </span>
                </div>

                <div className="h-2/3 w-[1px] bg-gray-dark rounded-full"></div>

                <div className="flex rounded-r-full cursor-pointer pl-3 pr-4 py-1 
                  hover:bg-[hsl(0,0%,88%)]">
                  <span className="">
                    <FontAwesomeIcon icon={faThumbsDown} flip="horizontal" className="text-lg" />
                  </span>
                </div>
              </div>
              
            </div> 
          </div>
          
          <hr />

          <div className="video-descr bg-gray-light rounded-md text-sm p-3 mt-3">
            <div className="font-medium">
              <span> { displayDecimalNum(video.statistics.viewCount) } views</span>
              &nbsp;
              <span> { video.snippet.publishedAt } </span>
            </div>

            <p className="">{ video.snippet.description }</p>
          </div>

        </div>
        
        <div className="comment-section mt-4">
          <div> { addCommaSeparator(video.statistics.commentCount.toString()) } comments </div>
          
          <Comments data={comments} />

        </div>

      </section>

      <section className="video-list border-blue-500">
        {/* <RelatedVideos data={relatedVideos.contents} /> */}
        related videos
      </section>



    </div>
  );
}
 
export default VideoDetail;