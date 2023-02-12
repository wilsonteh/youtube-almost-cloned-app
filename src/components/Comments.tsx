import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Comments = ({ data: comments } : any) => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [expandComment, setExpandComment] = useState(false);
  const [toggleText, setToggleText] = useState("show");
  const [toggleIcon, setToggleIcon] = useState("plus");

  const handleToggleComments = () => {
    setExpandComment(!expandComment);
    setToggleText(toggleText === "show" ? "hide" : "show");
    setToggleIcon(toggleIcon === "plus" ? "minus" : "plus");
  }
    

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    if (windowWidth < 1200) {
      setExpandComment(false)
    } else {
      setExpandComment(true)
    }

  }, [windowWidth])

  return (

    <div className="flex flex-col gap-5">
      {/* <input type="checkbox" id="checkbox" className="" /> */}
        
      <button className="xl:hidden cursor-pointer mt-2 primary-btn flex items-center 
        justify-between px-6 py-2" onClick={handleToggleComments} >
        <span className="first-letter:uppercase">
          { toggleText } comments
        </span>
        <span className="">
          <FontAwesomeIcon icon={toggleIcon === "plus" ? faPlus : faMinus} className="text-sm" />
        </span>
      </button>

      <div className={`flex flex-col gap-5 ${expandComment ? "flex mt-5" : "hidden"}`}>
        { comments.map((comment: any) => (
          <div key={comment.commentId} className="flex items-start">
            <div className="max-w-[40px] h-[40px]">
              <img className="rounded-full w-full" src={comment.authorProfileImageUrl[0].url} 
                alt={comment.authorDisplayName} />
            </div>

            <div className="flex flex-col ml-4 w-fit">
              <div className="flex justify-start items-center gap-1">
                <a href={`/channel/${comment.authorChannelId}`} className="text-[13px] font-medium"> 
                  { comment.authorDisplayName } 
                </a>
                
                {/* { comment.author.badges[0]?.text === "Verified" && 
                <span className="">
                  <FontAwesomeIcon icon={faCheck} 
                    className="text-[11px] text-[hsl(0,0%,60%)] mb-[2px]" />
                </span> } */}

                <span className="text-xs text-[hsl(0,0%,38%)]"> 
                  { comment.publishedTimeText } 
                </span>
              </div>

              <p className="text-sm">
                { comment.textDisplay }
              </p>

              <div className="mt-2 flex gap-3">
                <div className="flex items-center gap-[2px]">
                  <span className="hover:bg-gray-main cursor-pointer px-[6px] py-[2.5px] rounded-full">
                    <FontAwesomeIcon icon={faThumbsUp} className="text-lg" />
                  </span>
                  <small className="text-xs">
                    { comment.likesCount }
                  </small>
                </div>

                <span className="hover:bg-gray-main cursor-pointer px-[6px] py-[2.5px] rounded-full">
                  <FontAwesomeIcon icon={faThumbsDown} flip="horizontal" 
                    className="text-lg cursor-pointer" />
                </span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>

  );
}
 
export default Comments;