import MenuBar from "./components/MenuBar";
import Header from "./components/Header";
import { useEffect, useState } from "react";

const App = () => {

  const [windowWidth, setWindowWidth] = useState(0);
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [isMiniMenu, setIsMiniMenu] = useState(false);
  
  const handleHamburgerBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    setIsMiniMenu(!isMiniMenu)
    
    // oni able to toggle this if < sm screen
    if (windowWidth < 576) {
      console.log("toggled menubar");
      setShowMenuBar(!showMenuBar)
    }
  }
  
  useEffect(() => {
    setWindowWidth(window.innerWidth)

  }, [windowWidth, showMenuBar, isMiniMenu])

  return (
    <div className="App">
      <Header handleHamburgerBtn={handleHamburgerBtn} />
      <div className="flex">
        <section className={`sm:block ${isMiniMenu ? 'flex-[0.5]' : 'flex-[1]'}
          ${showMenuBar ? 'mobile-menu' : 'hidden top-100%'}`}>
          <MenuBar isMiniMenu={isMiniMenu} showMenuBar={showMenuBar} />
        </section>

        <section className={`border-2 border-blue-500 flex-[5.5]`}>
          main content
        </section>

      </div>
      
    </div>
  )
}

export default App;