import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import MainContent from "./components/MainContent";
import VideoDetail from "./components/VideoDetail";
import Root from "./Root";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} >
          <Route index element={<MainContent />} />
          <Route path="video/:videoId" element={<VideoDetail />} loader={() => "This is video detail data"} />
          <Route path="channel/:channelId" element={<ChannelDetail />} />
        </Route>
      </>

    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>


  )
}

export default App;