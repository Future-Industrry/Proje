import Home from "./pages/Home";
import LoginRegister from "./pages/LoginRegister";
import Page404 from "./pages/Page404";

let routes = [
    { path: "/", element: <Home /> },
    { path: "/auth", element: <LoginRegister /> },
    { path: "*", element: <Page404 /> },
]

export default routes