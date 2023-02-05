import { useLoaderData, useParams } from "react-router-dom";

const VideoDetail = () => {

  const { videoId } = useParams();
  const video: any = useLoaderData();

  return (
    <div className="grid grid-cols-[2fr_1fr]">
      {/* <div>Video ID: {videoId}</div>       */}
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
          <div className="flex gap-[2px] text-xs text-blue-main mt-2">
            { video.superTitle.items.map((superTitle: string, i: number) => ( 
              <span> { superTitle } </span> 
            ))}
          </div>

          <h3 className="text-lg font-medium">
            { video.title }
          </h3>

          <div className="video-info flex justify-between py-2">
            <div className="info-left flex-1 justify-start flex ">
              <div className="w-[40px] h-[40px]">
                <img className="rounded-full" 
                  src="https://yt3.ggpht.com/ytc/AL5GRJULssAv65kAcbxwOj5eL3mWdRWevKtfm7Ywfz5n=s88-c-k-c0x00ffffff-no-rj" 
                  alt="" />
              </div>

              <div className="flex flex-col ml-2 pr-8">
                <div className="font-medium"> {video.author.title } </div>
                <div className="text-xs text-[hsl(0,0%,38%)]">100K susbcribers</div>
              </div>

              <button className="secondary-btn">
                <span className="text-sm font-medium px-1">Subscribe</span>  
              </button>  
            </div>

            {/* <div className="info-right flex-1 justify-end flex bg-red-400">
              Info right
            </div> */}
          </div>
          
          <hr />

          <div className="video-descr bg-gray-light rounded-md text-sm p-3 mt-3">
            <div className="font-medium">
              <span> {video.stats.views} views</span>
              &nbsp;
              <span> {video.publishDate} </span>
            </div>

            <p className="">{ video.description }</p>
          </div>

        </div>
        
        <div className="comment-section">
          <div> { video.stats.comments } comments </div>
          
          all comments

        </div>

      </section>

      <section className="video-list border-blue-500">
        video list
      </section>


    </div>
  );
}
 
export default VideoDetail;