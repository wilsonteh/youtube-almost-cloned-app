import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import ChannelDetail from "./components/ChannelDetail";
import MainContent from "./components/MainContent";
import VideoDetail from "./components/VideoDetail";
import Root from "./Root";
import { fetchChannelDetail, fetchTrendingVideos, fetchVideoDetail } from "./utils/fetchDataUtils";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Root />} >
          <Route index element={<MainContent />} loader={fetchTrendingVideos} />
          <Route path="channel/:channelId" element={<ChannelDetail />}
            loader={({ params }) => fetchChannelDetail(params.channelId)} />
          <Route path="video/:videoId" element={<VideoDetail />} 
            loader={({ params }) => fetchVideoDetail(params.videoId) }
            />
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