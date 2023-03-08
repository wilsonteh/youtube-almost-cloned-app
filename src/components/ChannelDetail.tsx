import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ChannelInfo, ChannelVideo } from "../utils/interfaces";
import ChannelVideoCard from "./ChannelVideoCard";

interface ChannelDetailsData {
  meta: ChannelInfo, 
  continuation: string,
  data: ChannelVideo[],
};
interface Channel {
  id: string | undefined,
  name: string,
  description: string,
  channelImg: string,
  bannerImg: string,
  subCount: string,
  videos: Video[],
};

interface Video {
  id: string, 
  title: string, 
  description: string, 
  viewCount: string, 
  publishedText: string,
  lengthText: string, 
  thumbnail: string, 
  richThumbnail: string,
};

const ChannelDetail = () => {

  const [channel, setChannel] = useState<Channel>({
    id: "",
    name: "",
    description: "",
    channelImg: "",
    bannerImg: "",
    subCount: "", 
    videos: [{ id: "", title: "", description: "", viewCount: "", publishedText: "", 
    lengthText: "", thumbnail: "", richThumbnail: ""}],
  });

  
  const { channelId } = useParams();
  const channelData: any = useLoaderData();
  const { meta, continuation, data }: ChannelDetailsData = channelData;
  
  useEffect(() => {
    setChannel(prev => ({
      ...prev,
      id: channelId,
      name: meta.title,
      description: meta.description, 
      channelImg: meta.thumbnail[2].url,
      bannerImg: meta.image.banner[2].url,
      subCount: meta.subscriberCount, 
      videos: data.map((video: ChannelVideo) => ({
        id: video.id,
        title: video.title,
        description: video.description,
        viewCount: video.viewCount,
        publishedText: video.publishedText,
        lengthText: video.lengthText,
        thumbnail: video.thumbnail[3].url,
        richThumbnail: video.richThumbnail[0].url,
      }))
    }));
    
  }, [])
  

  return (
    <div className="">
      <section className="banner w-full bg-red-400">
        <img className="w-full" src={channel.bannerImg} alt={channel.name} />
      </section>

      <section className="channel-header flex justify-between items-center px-12 py-6">
        <div className="flex gap-6 items-center">
          <div className="w-[120px] h-[120px]">
            <img className="w-full rounded-full" src={channel.channelImg} alt={channel.name} />
          </div>
          <div className="flex flex-col gap-y-1">
            <h3 className="text-2xl"> { channel.name } </h3>
            <div className="text-[hsl(0,0%,38%)] text-sm flex gap-2"> 
              <span className="font-semibold"> @{ channel.name.toLowerCase() } </span>
              <span> { channel.subCount } subscribers </span>
            </div>
            <p className="text-[hsl(0,0%,38%)] text-sm"> { channel.description } </p>
          </div>
        </div>

        <div className="">
          <button className="secondary-btn px-4 py-2"> Subscribe </button>
        </div>
      </section>

      <section className="video-list p-6 grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 
        gap-x-[16px] gap-y-[48px]">
        { channel.videos.map((video: Video) => (
          <ChannelVideoCard key={video.id} data={video} />
        ))}
      </section>

    </div>
  );
}
 
export default ChannelDetail;