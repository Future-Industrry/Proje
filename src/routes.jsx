import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Page404 from "./pages/Page404";
import Saves from "./pages/Saves";
import PaymentPage from "./pages/PaymentPage"
import Profile from "./pages/Profile";

//private for panel - validation user
import PrivateRoute from "./components/PrivateRoute";

//panel
import UserInfo from "./pages/panel/UserInfo";
import Skills from "./pages/panel/Skills";
import Transactions from "./pages/panel/Transactions";
import Projects from "./pages/panel/Projects";
import Achievements from "./pages/panel/Achievements";
import Setting from "./pages/panel/Setting";
import Weblog from "./pages/Weblog";
import MoreArticles from "./pages/panel/MoreArticles";
import ArticleInfo from "./pages/panel/ArticleInfo";


let routes = [
    { path: "/", element: <Home /> },
    { path: "*", element: <Page404 /> },
    { path: "/auth", element: <LoginRegister /> },
    { path: "/aboutus/*", element: <AboutUs /> },
    { path: "/Saves", element: <Saves /> },
    { path: "/profile", element: <Profile /> },
    { path: "/PaymentPage", element: <PaymentPage /> },
    { path: "/weblog", element: <Weblog /> },
    { path: "/moreArticles", element: <MoreArticles /> },
    { path: "/articleInfo", element: <ArticleInfo /> },
    //panel
    { path: "/userInfo", element: <PrivateRoute><UserInfo /></PrivateRoute> },
    { path: "/skills", element: <PrivateRoute><Skills /></PrivateRoute> },
    { path: "/transactions", element: <PrivateRoute><Transactions /></PrivateRoute> },
    { path: "/projects", element: <PrivateRoute><Projects /></PrivateRoute> },
    { path: "/achievements", element: <PrivateRoute><Achievements /></PrivateRoute> },
    { path: "/setting", element: <PrivateRoute><Setting /></PrivateRoute> },
]

export default routes