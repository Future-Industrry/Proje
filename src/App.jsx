import { useRoutes } from "react-router-dom";
import routes from "./routes";
import './App.css';
import { IsLoginProvider } from "./context/IsLoginContext";
import { ThemeProvider } from "./components/contexts/ThemeContext"; // اضافه کردن ThemeProvider

function App() {
  let routers = useRoutes(routes);

  return (
    <IsLoginProvider>
      <ThemeProvider>
        {routers}
      </ThemeProvider>
    </IsLoginProvider>
  );
}

export default App;