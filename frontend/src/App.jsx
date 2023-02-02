import { BrowserRouter as Router } from "react-router-dom";

import Routing from "./components/Routing";
import { CurrentUserContextProvider } from "../context/userContext";

import Navigation from "./components/Navigation";
import "../Style/index.css";

function App() {
  return (
    <Router>
      <CurrentUserContextProvider>
        <Navigation />
        <Routing />
      </CurrentUserContextProvider>
    </Router>
  );
}

export default App;
