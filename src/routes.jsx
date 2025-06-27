import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Page404 from "./pages/Page404";
import ProfileCollection from "./pages/ProfileCollection";
import ProfileSample from "./pages/ProfileSample";
import ProfileAbout from "./pages/ProfileAbout";
import Saves from "./pages/Saves";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/auth", element: <LoginRegister /> },
    { path: "/aboutus/*", element: <AboutUs /> },
    { path: "/Saves", element: <Saves /> },
    { path: "*", element: <Page404 /> },
    { path: "/profile", element: <ProfileAbout /> },
    { path: "/profile/collection", element: <ProfileCollection /> },
    { path: "/profile/sample", element: <ProfileSample /> }
]

export default routes