import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Profile from "./components/Profile";

function App() {
  let routers = useRoutes(routes)
  return (
    <div>
      <Profile></Profile>
    </div>
  )
}

export default App;
