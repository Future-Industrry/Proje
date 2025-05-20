import { useRoutes } from "react-router-dom";
import "./App.css";
import routes from "./routes";

function App() {
  let routers = useRoutes(routes)
  return routers
}

export default App;
