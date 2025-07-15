import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Page404 from "./pages/Page404";
import Saves from "./pages/Saves";

// import FileUploader from './pages/FileUploader';




import PaymentPage from "./pages/PaymentPage"
//private for panel - validation user
import PrivateRoute from "./components/PrivateRoute";

//panel
import UserInfo from "./pages/panel/UserInfo";
import Skills from "./pages/panel/Skills";
import Transactions from "./pages/panel/Transactions";
import Projects from "./pages/panel/Projects";
import Achievements from "./pages/panel/Achievements";
import Setting from "./pages/panel/Setting";
// <<<<<<< HEAD
import Profile from "./pages/Profile";


let routes = [
    { path: "/", element: <Home /> },
    { path: "/auth", element: <LoginRegister /> },
    { path: "/aboutus/*", element: <AboutUs /> },
    { path: "/Saves", element: <Saves /> },
    { path: "*", element: <Page404 /> },

// <<<<<<< HEAD
    { path: "/profile", element: <Profile /> },


    { path: "/profile", element: <ProfileAbout /> },
    { path: "/profile/collection", element: <ProfileCollection /> },
    { path: "/profile/sample", element: <ProfileSample /> },
    { path: "/PaymentPage", element: <PaymentPage /> },

    { path: "/userInfo", element: <PrivateRoute><UserInfo /></PrivateRoute> },
    { path: "/skills", element: <PrivateRoute><Skills /></PrivateRoute> },
    { path: "/transactions", element: <PrivateRoute><Transactions /></PrivateRoute> },
    { path: "/projects", element: <PrivateRoute><Projects /></PrivateRoute> },
    { path: "/achievements", element: <PrivateRoute><Achievements /></PrivateRoute> },
    { path: "/setting", element: <PrivateRoute><Setting /></PrivateRoute> },

    // { path: "/fileuploader", element: <PrivateRoute><FileUploader /></PrivateRoute> },

   

]

export default routes