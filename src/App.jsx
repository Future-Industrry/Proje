import { useRoutes, BrowserRouter} from "react-router-dom";
import "./App.css";
import routes from "./routes";




function App() {
  let routers = useRoutes(routes)
  return (
    <BrowserRouter>
    {routers}
    </BrowserRouter>
  )
}

export default App;
