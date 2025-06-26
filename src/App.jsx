import { useRoutes, BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import ProfileAbout from "./pages/ProfileAbout";
import ProfileCollection from "./pages/ProfileCollection";
import ProfileSample from "./pages/ProfileSample";

function App() {
  let routers = useRoutes(routes)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProfileAbout />} />
        <Route path='/collection' element={<ProfileCollection />} />
        <Route path='/sample' element={<ProfileSample />} />
      </Routes>
    </BrowserRouter>
    

  )
}

export default App;
