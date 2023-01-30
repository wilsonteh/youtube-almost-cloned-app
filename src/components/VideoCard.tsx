
const VideoCard = () => {

  return (
    <div className="flex flex-col">
      <div className="relative">
        <a href="">
          <img className="rounded-xl" 
            src="https://i.ytimg.com/vi/UbOaAtHWidc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_4pborog-GN879HOh7y8Pc2dwtw" alt="" />
        </a>
        <span className="bg-[hsla(0,0%,0%,0.8)] text-white font-medium text-xs px-1 rounded-sm absolute bottom-1 right-1">
          34:50
        </span>
      </div>

      <div className="pt-3 flex items-start">
        <div className="w-[48px] h-[48px]">
          <a href="">
            <img className="rounded-full w-full" src="https://yt3.googleusercontent.com/ytc/AMLnZu80d66aj0mK3KEyMfpdGFyrVWdV5tfezE17IwRkhw=s176-c-k-c0x00ffffff-no-rj" alt="" />
          </a>
        </div>

        <div className="flex flex-col px-3">
          <a href="" className="font-medium text-sm"> 
            How to Fireship: Javascript Version Another Text??? 
          </a>
          <a href="" className="mt-2 text-xs text-[hsl(0,0%,38%)]">Fireship</a>
          <div className="text-xs text-[hsl(0,0%,38%)]">301K views • 2 days ago</div>
        </div>

      </div>

    </div>
  );
}
 
export default VideoCard;