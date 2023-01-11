import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMagnifyingGlass, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

type HeaderProps = {
  handleHamburgerBtn: any 
}

const Header = ({ handleHamburgerBtn }: HeaderProps) => {
  return (
    <header className="bg-white flex py-3 px-2 sm:px-6" >

      <div className="left-col w-[180px] flex-auto flex justify-start items-center border-teal-500">
        <button className="text-black cursor-pointer w-[42px] h-[42px] rounded-full hover:bg-gray-main"
          onClick={handleHamburgerBtn}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>

        <a href="/" className="flex justify-center items-center md:ml-6">
          <FontAwesomeIcon icon={faYoutube} size="2x" className="text-red-main" /> 
          <span className="text-gray-900  font-semibold font-robotoC ml-1 text-xl">YouTube</span>
        </a>
      </div>

      <div className="center-col w-8/12 flex-initial justify-center items-center hidden md:flex border-blue-800">
        <form className="w-4/6 rounded-full justify-between hidden md:flex">
          <input type="text" placeholder="Search" 
            className="w-full px-4 py-2 border-[1px] border-gray-dark rounded-l-full outline-0 focus:border-[1px] focus:border-blue-main" 
            />
          <button className="bg-gray-light px-5 py-2 border-y-[1px] border-r-[1px] border-gray-dark rounded-r-full hover:bg-gray-main focus:bg-gray-main focus:outline-0" >
            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-black" />
          </button>
        </form>
      </div>

      <div className="right-col w-[220px] flex-auto flex justify-end items-center border-orange-500">
        <button className="text-black cursor-pointer w-[40px] h-[40px] rounded-full hover:bg-gray-main md:hidden">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>

        <button className="text-black cursor-pointer w-[40px] h-[40px] rounded-full hover:bg-gray-main">
          <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
        </button>

        <button className="primary-btn">
          <FontAwesomeIcon icon={faCircleUser} size="lg" className="" />
          <span className="ml-2 hidden xs:inline">Sign in</span>
        </button>
      </div>

    </header>
  );
}
 
export default Header;