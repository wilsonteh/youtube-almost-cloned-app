import MenuBar from "./components/MenuBar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const Root = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // showMenuBar = toggle menubar on mobile/tablet screen
  // miniMenu = mini ver of menubar (icon and text up & down)
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [isMiniMenu, setIsMiniMenu] = useState(false);
  const [menuBarIcon, setMenuBarIcon] = useState("bars");
  
  const handleHamburgerBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // oni able to toggle this if < sm screen
    if (windowWidth < 768) {
      setShowMenuBar(!showMenuBar)
    } 
    setMenuBarIcon(menuBarIcon === "bars" ? "xMark" : "bars");
    document.body.classList.toggle('menubar-expansion', !showMenuBar);
  }
  
  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth)); 
    if (windowWidth >= 768) {
      setShowMenuBar(false)
      if (windowWidth < 992) {
        setIsMiniMenu(true)
      } else {
        setIsMiniMenu(false)
      }
    } 
  }, [windowWidth, showMenuBar, isMiniMenu])

  return (
    <>
      <Header handleHamburgerBtn={handleHamburgerBtn} menuBarIcon={menuBarIcon} />

      <div className="flex">
        <section className={`md:block ${isMiniMenu ? 'flex-[.5]' : 'flex-[.9]'} 
          ${showMenuBar ? 'mobile-menu' : 'hidden top-100%'}`}>
          <MenuBar isMiniMenu={isMiniMenu} showMenuBar={showMenuBar} />
        </section>

        <section className={`flex-[5.5]`}>
          <Outlet />
        </section>
        
      </div>
    </>
  );
}
 
export default Root;