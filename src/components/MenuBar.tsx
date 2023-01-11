import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPlay, faClapperboard, faClockRotateLeft, faFire, faMusic, faGamepad, faNewspaper, faFutbol, faCirclePlus, faGear } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser, faBookmark, faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

type MenuBarProps = {
  isMiniMenu: boolean, 
  showMenuBar: boolean
}

const MenuBar = ({ isMiniMenu, showMenuBar }: MenuBarProps) => {

  return (
    <nav id="menu-bar" className={`flex flex-col sticky top-0 h-[90vh] overflow-y-auto invisible hover:visible focus:visible`} >
      <div className="visible">
        <div className="menu-item-container">
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faHouse} size="lg" className='' />
            </span>
            <div className="">Home</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faPlay} size="lg" className="" />
            </span>
            <div>Shorts</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faClapperboard} size="lg" className="" />
            </span>
            <div>Subscriptions</div>
          </a>
        </div>
        <hr />

        <div className="menu-item-container">
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faBookmark} size="lg" className="" />
            </span>
            <div>Library</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faClockRotateLeft} size="lg" className="" />
            </span>
            <div>History</div>
          </a>
        </div>
        <hr />

        <div className={`flex flex-row justify-center md:flex-col px-6 py-4 ${isMiniMenu ? 'md:items-center' : 'md:items-start'}`}>
          <p className={`text-sm hidden ${isMiniMenu ? 'md:hidden' : 'md:block'}`}>
            Sign in to like videos, comment, and subscribe.
          </p>
          <button className={`primary-btn ${isMiniMenu ? '' : 'md:mt-3'}`}>
            <FontAwesomeIcon icon={faCircleUser} size="lg" className="" />
            <span className={`ml-2 hidden ${isMiniMenu ? 'md:hidden' : 'md:inline'}`}>
              Sign in
            </span>
          </button>
        </div>
        <hr />

        <div className="menu-item-container">
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faFire} size="lg" className="" />
            </span>
            <div>Trending</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faMusic} size="lg" className="" />
            </span>
            <div>Music</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faGamepad} size="lg" className="" />
            </span>
            <div>Gaming</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faNewspaper} size="lg" className="" />
            </span>
            <div>News</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faFutbol} size="lg" className="" />
            </span>
            <div>Sports</div>
          </a>
        </div>
        <hr />

        <div className="menu-item-container">
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faCirclePlus} size="lg" className="" />
            </span>
            <div>Browse Channels</div>
          </a>
        </div>
        <hr />

        <div className="menu-item-container">
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faGear} size="lg" className="" />
            </span>
            <div>Settings</div>
          </a>
          <a href="" className={`menu-item ${ isMiniMenu ? 'mini-menu-item' : ''}`}>
            <span className={`menu-item-icon ${!isMiniMenu ? 'md:mr-4' : ''}`}>
              <FontAwesomeIcon icon={faCircleQuestion} size="lg" className="" />
            </span>
            <div>Help</div> 
          </a>
        </div>
        <hr />

        <div className="menu-item-container">
          <p className="text-gray-500 text-xs text-center">
            &copy; 2023 Google LLC
          </p>
        </div>
      </div>
    </nav>
  );
}
 
export default MenuBar;