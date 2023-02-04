import { useLoaderData, useParams } from "react-router-dom";

const VideoDetail = () => {

  const { videoId } = useParams();
  const video = useLoaderData();

  return (
    <div className="grid grid-cols-[2fr_1fr]">
      {/* <div>Video ID: {videoId}</div>       */}
      <section className="video-detail border-2 border-red-500 p-6 pb-[56.25%] mx-0 my-auto">
        <div className="relative pb-[56.25%] h-0">
          <iframe className="absolute top-0 left-0 w-full h-full" 
            width="640" height="360" src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
        


      </section>

      <section className="video-list border-2 border-blue-500">
        video list
      </section>


    </div>
  );
}
 
export default VideoDetail;