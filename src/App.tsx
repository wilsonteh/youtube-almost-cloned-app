import MenuBar from "./components/MenuBar";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent";

const App = () => {
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [isMiniMenu, setIsMiniMenu] = useState(false);
  
  const handleHamburgerBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    // oni able to toggle this if < sm screen
    if (windowWidth < 768) {
      console.log("toggled mobile menubar");
      setShowMenuBar(!showMenuBar)
    } 
  }

  useEffect(() => {

    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    if (windowWidth < 992) {
      setIsMiniMenu(true)
    } else {
      setIsMiniMenu(false)
    }

  }, [windowWidth, showMenuBar, isMiniMenu])

  return (
    <div className="App">
      <Header handleHamburgerBtn={handleHamburgerBtn} />
      <div className="flex">
        <section className={`md:block ${isMiniMenu ? 'flex-[.5]' : 'flex-[.9]'}
          ${showMenuBar ? 'mobile-menu' : 'hidden top-100%'}`}>
          <MenuBar isMiniMenu={isMiniMenu} showMenuBar={showMenuBar} />
        </section>

        <section className={`border-blue-500 flex-[5.5]`}>
          <MainContent />
        </section>

      </div>
      
    </div>
  )
}

export default App;