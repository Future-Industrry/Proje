import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Page404 from "./pages/Page404";
import Saves from "./pages/Saves";
import PrivateRoute from "./components/PrivateRoute";
import UserInfo from "./pages/panel/UserInfo";
import Skills from "./pages/panel/Skills";
import Transactions from "./pages/panel/Transactions";
import Projects from "./pages/panel/Projects";
import Achievements from "./pages/panel/Achievements";
import Setting from "./pages/panel/Setting";
import Profile from "./pages/Profile";
import Weblog from "./pages/Weblog";
import MoreArticles from "./pages/MoreArticles";
import ArticleInfo from "./pages/ArticleInfo";
// import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import Users from "./pages/panel/Users";
import MyProjects from "./pages/panel/MyProjects";
import MyTickets from "./pages/panel/MyTickets";
import Requests from "./pages/panel/Requests";
import Articles from "./pages/panel/Articles";
import Tickets from "./pages/panel/Tickets";
import MyTransactions from "./pages/panel/MyTransactions";
import Developer from "./pages/Developer";

// وارد کردن کامپوننت‌های پروژه شما
import { Layout } from "./components/common/Layout"; // مسیر درست برای Layout
// import { Home } from "./screen/home/Home"; // مسیر درست برای HomeNew
import { Shop } from "./screen/shop/Shop"; // مسیر درست برای Shop
import { CartPage } from "./screen/CartPage"; // مسیر درست برای Shop
import { ProductDetails } from "./screen/product/ProductDetails"; // مسیر درست برای Shop
import { Product } from "./screen/product/Product"; // مسیر درست برای Shop


let routes = [
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/projects", element: <Layout><Shop /></Layout> },
  { path: "/project/:id", element: <Layout><ProductDetails /></Layout> },
  { path: "/cart", element: <Layout><CartPage /></Layout> },
  { path: "/about", element: <Layout><div className="container py-20 text-center"><h1 className="text-4xl font-iranyekanBold">درباره ما</h1><p className="text-lg font-iranyekan mt-4">پلتفرم پروژه، فضایی برای دانشجویان جهت بارگذاری و فروش پروژه‌هایشان.</p></div></Layout> },
  { path: "/services", element: <Layout><div className="container py-20 text-center"><h1 className="text-4xl font-iranyekanBold">پشتیبانی</h1><p className="text-lg font-iranyekan mt-4">پشتیبانی ۲۴/۷ از طریق ایمیل و چت آنلاین.</p></div></Layout> },
  { path: "/blog", element: <Layout><div className="container py-20 text-center"><h1 className="text-4xl font-iranyekanBold">مقالات</h1><p className="text-lg font-iranyekan mt-4">مقالات آموزشی در حوزه برنامه‌نویسی و پروژه‌های دانشجویی.</p></div></Layout> },
  { path: "*", element: <Page404 /> },
  { path: "/auth", element: <LoginRegister /> },
  { path: "/aboutus/*", element: <AboutUs /> },
  { path: "/Saves", element: <Saves /> },
  { path: "/profile", element: <Profile /> },
  { path: "/Payment", element: <Payment /> },
  { path: "/Weblog", element: <Weblog /> },
  { path: "/MoreArticles", element: <MoreArticles /> },
  { path: "/ArticleInfo", element: <ArticleInfo /> },
  { path: "/ProductDetails", element: <ProductDetails /> },
  { path: "/panel/userInfo", element: <PrivateRoute><UserInfo /></PrivateRoute> },
  { path: "/panel/skills", element: <PrivateRoute><Skills /></PrivateRoute> },
  { path: "/panel/myTransactions", element: <PrivateRoute><MyTransactions /></PrivateRoute> },
  { path: "/panel/myProjects", element: <PrivateRoute><MyProjects /></PrivateRoute> },
  { path: "/panel/achievements", element: <PrivateRoute><Achievements /></PrivateRoute> },
  { path: "/panel/setting", element: <PrivateRoute><Setting /></PrivateRoute> },
  { path: "/panel/users", element: <PrivateRoute><Users /></PrivateRoute> },
  { path: "/panel/projects", element: <PrivateRoute><Projects /></PrivateRoute> },
  { path: "/panel/myTickets", element: <PrivateRoute><MyTickets /></PrivateRoute> },
  { path: "/panel/requests", element: <PrivateRoute><Requests /></PrivateRoute> },
  { path: "/panel/articles", element: <PrivateRoute><Articles /></PrivateRoute> },
  { path: "/panel/tickets", element: <PrivateRoute><Tickets /></PrivateRoute> },
  { path: "/panel/transactions", element: <PrivateRoute><Transactions /></PrivateRoute> },
  { path: "/developer", element: <Developer /> },
];

export { Title, BodyOne, BodyTwo, Caption, Span, Badges, CustomLink, CustomNavLink } from "./components/common/CustomComponents";

export default routes;