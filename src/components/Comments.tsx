import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { displayWholeNum } from "../utils/Utils";


const Comments = ({ data: comments } : any) => {
  
  return (
    <div className="flex flex-col gap-5 py-4">

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
  );
}
 
export default Comments;